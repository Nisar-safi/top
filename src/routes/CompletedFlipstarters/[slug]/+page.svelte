<script>
  export let data;
  const { campaign } = data;
  console.log('data is comming from params ', data);



</script>

<div class="card ">

  <p class="card-header-title ">
    <span class="icon"><i class="fas fa-fire"></i></span>
    {campaign.title}
  </p>

<div class="card-content is-centered column is-full ">
  <div class="content">
    <p>
      <strong
        ><span class="icon"><i class="fas fa-coins"></i></span> Amount:</strong
      >
      {campaign.amount/1000000000} BCH
    </p>
    <p>
      <strong
        ><span class="icon"><i class="fas fa-align-left"></i></span> Description:</strong
      >
     {campaign.description}
    </p>
   
    <div>
      <strong
        ><span class="icon"><i class="fas fa-tags"></i></span> category:</strong
      >
      {#each campaign.category as Categories}
        <span class="tag is-info m-3"
          ><span class="icon"><i class="fas fa-tag"></i></span>
          {Categories}</span
        >
      {/each}
   
    </div>
    <p>
      <strong
        ><span class="icon"><i class="fas fa-info-circle"></i></span> Status:</strong
      >
      {campaign.status}
    </p>
    <p>
      <strong
        ><span class="icon"><i class="fas fa-handshake"></i></span> Transaction:</strong
      >
      <a href={`https://explorer.bitcoin.com/bch/tx/${campaign.tx}`} target="_blank"
        >Bitcoincash</a
      >
    </p>
    <p>
      <strong
        ><span class="icon"><i class="fas fa-link"></i></span> URL:</strong
      > <a href={campaign.url} target="_blank">URL</a>
    </p>
    <p>
      <strong
        ><span class="icon mr-1"><i class="fas fa-bullhorn"></i></span> Announcement:</strong
      >
    </p>
    <div class="buttons mt-3">
      {#each campaign.announcement as announ}
        <a class="button is-link mb-3" href={announ} target="_blank"
          ><span class="icon mr-1"><i class="fas fa-bullhorn"></i></span> View
          Announcement</a
        >
      {/each}
      <a class="button is-primary mb-3" href={campaign.url} target="_blank"
        ><span class="icon mr-1"
          ><i class="fas fa-external-link-alt"></i></span
        > Visit Campaign</a
      >
    </div>
    <p>
      <strong
        ><span class="icon"><i class="fas fa-archive"></i></span> Archive:</strong
      >
    </p>
    <div>
      {#each campaign.archive as arch}
        <p>
          <a href={arch} target="_blank"
            ><span class="icon"><i class="fas fa-archive"></i></span> Archive</a
          >
        </p>
      {/each}
    </div>
  </div>
</div>
</div>

<style>
.card-header-title.is-centered {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Custom styles to handle the truncated text */


/* Align icon to the left */
.icon {
  margin-right: 0.5rem; /* Adjust spacing as needed */
}
</style>
