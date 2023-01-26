<script>
  import '@picocss/pico'
  import Router from "svelte-spa-router";
  import routes from "virtual:generated-pages-svelte";
</script>

<Router {routes} />

<style>
  :global(*) {
    word-wrap: break-word;
  }
/*chrome extension*/
:global(body) {
    width: 350px;
    height: 700px;
    padding: 10px;
  }
</style>
