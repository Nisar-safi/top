<script>
  export let data;

  let { campaigns } = data;
  console.log("Campaigns: is comming from CompletedFlipstarters +paje.js", campaigns);

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
</script>

<main>
  <section class="section mt-6">
    <div class="container">
      <h1 class="title has-text-centered mt-4">Project Details</h1>
      <div class="columns is-centered is-multiline">
        {#each campaigns as campaign}
          {#if campaign.status === "success"}
            <div class="column is-half">
              <div class="card">
                <header class="card-header">
                    <h1 class="title is-4">
                        <a
                        href={`/CompletedFlipstarters/${slugify(campaign.title)}`}
                          data-sveltekit-prefetch
                        >
                          <span class="icon"><i class="fas fa-fire mr-3"></i></span
                          >{campaign.title.substring(0,15)}
                        </a>
                      </h1>
                  
                </header>
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong
                        ><span class="icon"><i class="fas fa-coins"></i></span> Amount:</strong
                      >
                      {campaign.amount/1000000000} BCH
                    </p>

                    <p>
                      <strong
                        ><span class="icon"><i class="fas fa-tags"></i></span> Category:</strong
                      >
                      {campaign.category.join(", ")}
                    </p>
                    <p>
                      <strong
                        ><span class="icon"
                          ><i class="fas fa-info-circle"></i></span
                        > Status:</strong
                      >
                      {campaign.status}
                    </p>
                    <p>
                      <strong
                        ><span class="icon"
                          ><i class="fas fa-handshake"></i></span
                        > Transaction:</strong
                      >
                      <a
                        href={`https://explorer.bitcoin.com/bch/tx/${campaign.tx}`}
                        target="_blank">Bitcoincash</a
                      >
                    </p>
                    <p>
                      <strong
                        ><span class="icon"><i class="fas fa-link"></i></span> URL:</strong
                      > <a href={campaign.url} target="_blank">URL</a>
                    </p>
                    
                    </div>
                  </div>
                </div>
              </div>
        
          {/if}
        {/each}
      </div>
    </div>
  </section>
</main>
