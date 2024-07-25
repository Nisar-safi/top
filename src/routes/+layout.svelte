<!-- src/routes/+layout.svelte -->
<script>
  import "bulma/css/bulma.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  
</script>
<div class="center">
  <a href="/Flipstarters">Flipstarters</a>
  <a href="/ActiveFlipstarters">Active Flipstarters</a>
  <a href="/CompletedFlipstarters">Completed Flipstarters</a>
  <a href="/AboutThisPage">About This Page</a>
</div>

<slot></slot>

<style>
  .center {
    display: flex;
    justify-content: center;
    gap: 20px; 
    margin: 20px 0; 
  }

  .center a {
    text-decoration: none;
    color: inherit;
  }
</style>
