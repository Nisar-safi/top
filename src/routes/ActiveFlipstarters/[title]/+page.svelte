<script>

export let data;

let { campaign } = data;
console.log("Campaigns:", campaign);
  </script>
  
  <style>

  </style>
  <div class="columns is-multiline">
    {#each campaign as campaig}
      {#if campaign.status === "running"}
        <div class="column is-half">

        {campaig.title}
            {campaig.status}
            {campaig.funded_tx}
            {campaig.description}
            {campaig.amount}
            {campaig.url}
            {campaig.categories}
            {campaig.announcements}
            {campaig.screenshots}
            {campaig.archives}

        </div>
      {/if}
    {/each}
  </div>