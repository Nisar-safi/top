<script>
  export let data;

  let { campaigns } = data;
  console.log("Campaigns:", campaigns);


  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
</script>

<div class="columns is-multiline">
  {#if campaigns.length === 0}
    <div class="column">
      <p>No campaigns available.</p>
    </div>
  {:else}
    {#each campaigns as campaign}
      {#if campaign.status === "running"}
        <div class="column is-half">
          <div class="card" style="margin: 1rem;">
            <div class="card-content">
              <div class="content">
                <h1 class="title is-4">
                  <a
                  href={`/ActiveFlipstarters/${slugify(campaign.title)}`}
                    data-sveltekit-prefetch
                  >
                    <span class="icon"><i class="fas fa-heading"></i></span
                    >{campaign.title.substring(0, 20)}
                  </a>
                </h1>

                <p>
                  <strong>Status:</strong>
                  <span class="icon"><i class="fas fa-info-circle"></i></span
                  >{campaign.status}
                </p>
                <p>
                  <strong>Funded Transaction:</strong>
                  <span class="icon"
                    ><i class="fas fa-hand-holding-usd"></i></span
                  >{campaign.funded_tx}
                </p>
                
              
             
                <p>
                  <span class="icon"><i class="fas fa-coins"></i></span>
                  Requesting:
                  <strong>{campaign.amount / 100000000} BCH</strong>
                </p>
                <div>
                  <strong
                    ><span class="icon"><i class="fas fa-tags"></i></span> Categories:</strong
                  >
                  {#each campaign.categories as category}
                    <span class="tag is-info m-3"
                      ><span class="icon"><i class="fas fa-tag"></i></span>
                      {category.name}</span
                    >
                  {/each}
                </div>
                <div class="buttons mt-3">
                  {#each campaign.announcements as announcement}
                    <a
                      class="button is-link mb-3"
                      href={announcement.url}
                      target="_blank"
                      ><span class="icon mr-1"
                        ><i class="fas fa-bullhorn"></i></span
                      > View Announcement</a
                    >
                  {/each}
                  <a
                    class="button is-primary mb-3"
                    href={campaign.url}
                    target="_blank"
                    ><span class="icon mr-1"
                      ><i class="fas fa-external-link-alt"></i></span
                    > visit Campaign</a
                  >
                </div>
              </div>
              <div class="container">
                <div class="is-flex is-flex-direction-column">
                  {#each campaign.archives as archive}
                    <a href={archive.url} class="is-link mb-3" target="_blank"
                      ><span class="icon"><i class="fas fa-archive"></i></span> Archive
                      Copy</a
                    >
                  {/each}
                </div>
                <div>
                  <strong
                    ><span class="icon"><i class="fas fa-images"></i></span> Screenshots:</strong
                  >
                  {#each campaign.screenshots as screenshot}
                    <p>
                      <a
                        href={screenshot.image}
                        class="is-link mb-3"
                        target="_blank"
                        ><span class="icon"><i class="fas fa-image"></i></span> Screenshot</a
                      >
                    </p>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/if}
</div>

<style>
  /* Custom styles to handle the truncated text */


  .icon {
    margin-right: 0.5rem;
  }
</style>
