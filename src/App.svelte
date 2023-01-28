<script>
  import '@picocss/pico'
  import Router from "svelte-spa-router";
  import routes from "virtual:generated-pages-svelte";
</script>

<Router {routes}  />
<style>

  :global(*) {
    word-wrap: break-word;
  }
/*chrome extension Max sizes*/
:global(body) {
    width: 350px;
    max-height: 700px;
    padding: 10px;
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
  }

</style>
