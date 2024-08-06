<script>
  import { base } from "$app/paths"; // Import the base path
  export let data;

  let { campaigns } = data;

  // targeting title for the next page
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  // Pagination state
  let currentPage = 1;
  const itemsPerPage = 5; // Set the number of items you want per page

  // Calculate total pages
  const totalPages = Math.ceil(campaigns.length / itemsPerPage);

  // Get the items for the current page
  function getPaginatedItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return campaigns.slice(start, end);
  }

  // The campaigns to display on the current page
  let paginatedCampaigns = getPaginatedItems(currentPage);

  // Navigate to a specific page
  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      paginatedCampaigns = getPaginatedItems(page);
    }
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
      <h1 class="title has-text-centered mt-4">Completed Flipstarters</h1>
      <div class="columns is-centered is-multiline">
        {#if paginatedCampaigns.length === 0}
          <div class="column">
            <p>No campaigns available.</p>
          </div>
        {:else}
          {#each paginatedCampaigns as campaign, index (campaign)}
            {#if campaign.status === "success"}
              <div class="column is-half">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <h1 class="title is-4 ml-3">
                        <a
                          href={prependBase(`/CompletedFlipstarters/${slugify(campaign.title)}`)}
                          data-sveltekit-prefetch
                        >
                          <span class="icon"><i class="fas fa-fire mr-4"></i></span>
                          {campaign.title.substring(0, 15)}
                        </a>
                      </h1>
                      <p class="mt-1">
                        <strong>
                          <span class="icon"><i class="fas fa-coins"></i></span> Amount:
                        </strong>
                        {campaign.amount} BCH
                      </p>
                      <div class="container">
                        <div class="mb-3">
                          <strong>
                            <span class="icon"><i class="fas fa-hashtag"></i></span> Index:
                          </strong>
                          <span class="ml-2">{(currentPage - 1) * itemsPerPage + index + 1}</span>
                        </div>
                        <p class="mt-3">
                          <strong>
                            <span class="icon"><i class="fas fa-info-circle"></i></span> Status:
                          </strong>
                          <span class="ml-2">{campaign.status}</span>
                        </p>
                      </div>
                      <p class="mt-4">
                        <strong>
                          <span class="icon"><i class="fas fa-handshake"></i></span> Transaction:
                        </strong>
                        <a
                          href={`https://explorer.bitcoin.com/bch/tx/${campaign.tx}`}
                          target="_blank"
                        >
                          Bitcoincash
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        {/if}
      </div>
      <!-- Pagination Controls -->
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <button
          class="pagination-previous"
          on:click={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          « Prev
        </button>
        <ul class="pagination-list">
          <!-- First page button -->
          <li>
            <button
              class="pagination-link {currentPage === 1 ? 'is-current' : ''}"
              on:click={() => goToPage(1)}
            >
              1
            </button>
          </li>
          <!-- Ellipsis before current page if necessary -->
          {#if currentPage > 3}
            <li><span class="pagination-ellipsis">…</span></li>
          {/if}
          <!-- Page numbers around the current page -->
          {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page (page)}
            {#if page > 1 && page < totalPages && page >= currentPage - 2 && page <= currentPage + 2}
              <li>
                <button
                  class="pagination-link {currentPage === page ? 'is-current' : ''}"
                  on:click={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            {/if}
          {/each}
          <!-- Ellipsis after current page if necessary -->
          {#if currentPage < totalPages - 2}
            <li><span class="pagination-ellipsis">…</span></li>
          {/if}
          <!-- Last page button -->
          {#if totalPages > 1}
            <li>
              <button
                class="pagination-link {currentPage === totalPages ? 'is-current' : ''}"
                on:click={() => goToPage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          {/if}
        </ul>
        <button
          class="pagination-next"
          on:click={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next »
        </button>
      </nav>
    </div>
  </section>
</main>

<style>
  .pagination-link.is-current {
    background-color: #3273dc;
    color: #fff;
  }
  .pagination-link {
    cursor: pointer;
  }
  .pagination-ellipsis {
    padding: 0.5em;
  }
</style>
