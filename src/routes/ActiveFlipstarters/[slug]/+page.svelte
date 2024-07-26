<script>
  export let data;
  const { campaign } = data;
</script>

<div class="campaign-details">
  <h1>{campaign.title}</h1>
  <p><strong>Status:</strong> {campaign.status}</p>
  <p><strong>Funded Transaction:</strong> {campaign.funded_tx}</p>
  <p><strong>Description:</strong> {campaign.description}</p>
  <p><strong>Amount:</strong> {campaign.amount}</p>
  <p><strong>URL:</strong> <a href={campaign.url} target="_blank">{campaign.url}</a></p>
  <p><strong>Categories:</strong> {campaign.categories.join(', ')}</p>
  <p><strong>Announcements:</strong> {campaign.announcements}</p>
  <p><strong>Screenshots:</strong></p>
  <div class="screenshots">
    {#each campaign.screenshots as screenshot}
      <img src={screenshot} alt="Screenshot" />
    {/each}
  </div>
  <p><strong>Archives:</strong> {campaign.archives}</p>
</div>
