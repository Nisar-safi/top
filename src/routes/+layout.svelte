<script>
  import "bulma/css/bulma.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { base } from "$app/paths";

function prependBase(url) {
  if (!url.startsWith('http') && !url.startsWith('https') && !url.startsWith(base)) {
    return `${base}${url}`;
  }
  return url;
}

</script>

<nav class="center">
  <a href={prependBase('/Flipstarters')} class="button is-primary is-outlined">Flipstarters</a>
  <a href={prependBase('/ActiveFlipstarters')} class="button is-link is-outlined">Active Flipstarters</a>
  <a href={prependBase('/CompletedFlipstarters')} class="button is-success is-outlined">Completed Flipstarters</a>
  <a href={prependBase('/AboutThisPage')} class="button is-info is-outlined">About This Page</a>
</nav>

<slot></slot>

<style>
  .center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }

  .center .button {
    text-decoration: none;
  }

  .center .button:hover {
    color: rgb(6, 54, 10);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .center {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      margin: auto;
      margin-top: 10px;
    }
  }
</style>
