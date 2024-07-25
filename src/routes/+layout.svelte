<!-- src/routes/+layout.svelte -->
<script>
  import "bulma/css/bulma.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  
</script>
<div class="center">
  <a href="/Flipstarters">Flipstarters</a>
  <a href="/Active flipstarters">Active flipstarters</a>
  <a href="/Completed flipstarters">Completed flipstarters</a>
  <a href="/About this page">About this page</a>
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
