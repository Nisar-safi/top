// [slug]/+page.js
export async function load({ params }) {
  const response = await fetch('https://flipbackend.bitcoincash.network/v1/flipstarter');
  const data = await response.json();
  const campaign = data.find(campaign => slugify(campaign.title) === params.slug);

  if (!campaign) {
    return { status: 404, error: new Error('Not found') };
  }

  return { campaign };
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
