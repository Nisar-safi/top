<script>
  import { base } from "$app/paths";
  export let data;

  let { campaigns } = data;
  console.log("Campaigns:", campaigns);

  function slugify(text) {
      return text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
  }

  function prependBase(url) {
      if (!url.startsWith('http') && !url.startsWith(base)) {
          return `${base}${url}`;
      }
      return url;
  }
</script>

<main>
  <section class="section mt-6">
      <div class="container">
          <h1 class="title has-text-centered mt-4">Active Flipstarters</h1>
          <div class="columns is-centered is-multiline">
              {#if campaigns.length === 0}
                  <div class="column">
                      <p>No campaigns available.</p>
                  </div>
              {:else}
                  {#each campaigns as campaign, index (campaign)}
                      {#if campaign.status === "running"}
                          <div class="column is-half">
                              <div class="card" style="margin: 1rem;">
                                  <div class="card-content">
                                      <div class="content" style="margin-bottom:0.8rem;">
                                          <h1 class="title is-4">
                                              <a
                                                  href={prependBase(`/ActiveFlipstarters/${slugify(campaign.title)}`)}
                                                  data-sveltekit-prefetch
                                              >
                                                  <span class="icon">
                                                      <i class="fas fa-fire mr-3"></i>
                                                  </span>
                                                  {campaign.title.substring(0, 15)}
                                              </a>
                                          </h1>
                                          <p>
                                              <strong>Status:</strong>
                                              <span class="icon">
                                                  <i class="fas fa-info-circle"></i>
                                              </span>
                                              {campaign.status}
                                          </p>
                                          <p>
                                              <strong>
                                                  <span class="icon">
                                                      <i class="fas fa-coins"></i>
                                                  </span>
                                                  Requesting:
                                              </strong>
                                              <strong> {campaign.amount / 100000000} BCH</strong>
                                          </p>
                                          <div>
                                              <strong>
                                                  <span class="icon">
                                                      <i class="fas fa-hashtag"></i>
                                                  </span>
                                                  Index:
                                              </strong>
                                              {index}
                                          </div>
                                      </div>
                                      <div class="container">
                                          <div class="is-flex mb-3">
                                              <div>
                                                  <strong>
                                                      <span class="icon">
                                                          <i class="fas fa-archive"></i>
                                                      </span>
                                                      Archive Copy:
                                                  </strong>
                                              </div>
                                              {#each campaign.archives as archive, index (archive)}
                                                  <a
                                                      href={archive.url}
                                                      class="is-link ml-2"
                                                      target="_blank"
                                                  >
                                                      #{index + 1}
                                                  </a>
                                              {/each}
                                          </div>
                                          <div class="is-flex">
                                              <strong>
                                                  <span class="icon">
                                                      <i class="fas fa-images"></i>
                                                  </span>
                                                  Screenshots:
                                              </strong>
                                              {#each campaign.screenshots as screenshot, index (screenshot)}
                                                  <p>
                                                      <a
                                                          href={screenshot.image}
                                                          class="is-link mb-3"
                                                          target="_blank"
                                                      >
                                                          <span class="icon">
                                                              <i class="fas fa-image"></i>
                                                          </span>
                                                          #{index + 1}
                                                      </a>
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
      </div>
  </section>
</main>

<style>
  /* Custom styles to handle the truncated text */
  .icon {
      margin-right: 0.5rem;
  }
</style>
