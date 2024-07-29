<script>
  export let data;

  let { campaigns } = data;



// targeting tiltle for next page 
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




</script>
<main>
  <section class="section mt-6">
    <div class="container">
      <h1 class="title has-text-centered mt-4">Project Details</h1>
      <div class="columns is-centered is-multiline">
        {#each paginatedCampaigns as campaign}
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
                      <strong>
                        <span class="icon"><i class="fas fa-coins"></i></span> Amount:
                      </strong>
                      {campaign.amount / 1000000000} BCH
                    </p>
                    <p>
                      <strong>
                        <span class="icon"><i class="fas fa-tags"></i></span> Category:
                      </strong>
                      {campaign.category.join(", ")}
                    </p>
                    <p>
                      <strong>
                        <span class="icon"><i class="fas fa-info-circle"></i></span> Status:
                      </strong>
                      {campaign.status}
                    </p>
                    <p>
                      <strong>
                        <span class="icon"><i class="fas fa-handshake"></i></span> Transaction:
                      </strong>
                      <a href={`https://explorer.bitcoin.com/bch/tx/${campaign.tx}`} target="_blank">
                        Bitcoincash
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        {/each}
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
          <li><button on:click={() => goToPage(1)}>1</button></li>
          {#if currentPage > 1}
            <li><span class="pagination-ellipsis">…</span></li>
          {/if}
          {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page (page)}
            {#if page > currentPage - 3 && page < currentPage + 3}
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
          {#if currentPage < totalPages - 2}
            <li><span class="pagination-ellipsis">…</span></li>
          {/if}
          <li><button on:click={() => goToPage(totalPages)}>{totalPages}</button></li>
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
.pagination-info {
  margin-left: 1em;
}

</style>