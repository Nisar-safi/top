<script>
    export let currentPage;
    export let totalPages;
    export let onPageChange;
  
    function handlePageClick(page) {
      onPageChange(page);
    }
  </script>
  
  <nav class="pagination" role="navigation" aria-label="pagination">
    <button
      class="pagination-previous"
      disabled={currentPage === 1}
      on:click={() => handlePageClick(currentPage - 1)}
    >
      Previous
    </button>
    <button
      class="pagination-next"
      disabled={currentPage === totalPages}
      on:click={() => handlePageClick(currentPage + 1)}
    >
      Next
    </button>
    <ul class="pagination-list">
      {#each Array(totalPages).fill(0).map((_, i) => i + 1) as page}
        <li>
          <button
            class:pagination-link="{true}"
            aria-label={"Page " + page}
            aria-current={currentPage === page ? 'page' : undefined}
            on:click={() => handlePageClick(page)}
          >
            {page}
          </button>
        </li>
      {/each}
    </ul>
  </nav>
  