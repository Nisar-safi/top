export async function load({ params, fetch }) {
  const { title } = params;
  console.log(params);
  const url = "https://flipbackend.bitcoincash.network/v1/flipstarter";
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const campaigns = await response.json();
    console.log('data is comming from backend', campaigns);
    const campaign = campaigns.find(c => encodeURIComponent(c.title) === title);
   
    
    if (!campaign) {
      return {
        status: 404,
        error: new Error('Campaign not found')
      };
    }

    return {
      props: {
        campaign
      }
    };
  } catch (error) {
    console.error("Error loading campaign:", error);
    return {
      status: 500,
      error: new Error('Failed to load campaign details')
    };
  }
}
