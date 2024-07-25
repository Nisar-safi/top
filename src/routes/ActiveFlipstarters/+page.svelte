<script>
    // Importing components

    import Card from '$lib/Components/Card.svelte';
   
  
    // `load` function provides the `campaigns` prop
    export let campaigns =[];
    console.log("Campaigns:", campaigns);
  </script>

  
<div class="columns is-multiline">
    {#if campaigns.length === 0}
      <p>No campaigns available.</p>
    {:else}
      {#each campaigns as campaign}
        {#if campaign.status === "running"}
          <div class="column is-half">
            <Card
              title={campaign.title}
              status={campaign.status}
              funded_tx={campaign.funded_tx}
              description={campaign.description}
              amount={campaign.amount}
              url={campaign.url}
              categories={campaign.categories}
              announcements={campaign.announcements}
              screenshots={campaign.screenshots}
              archives={campaign.archives}
            />
          </div>
        {/if}
      {/each}
    {/if}
  </div>
  
  <style>
    .columns {
      margin: 1rem 0;
    }
  
    .column.is-half {
      margin-bottom: 1rem;
    }

</style>