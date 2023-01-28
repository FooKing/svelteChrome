<script>
  import MenuAccordionComp from "./MenuAccordionComp.svelte";
  import JSONTools from "./JSONTools.svelte";
</script>
<article data-theme="light">
  <nav>
      <p><strong>QA Tools</strong></p>
    <hr class="solid">
  </nav>
    <MenuAccordionComp prettyName="JSON Tools" name="JSONTools" component={JSONTools}></MenuAccordionComp>
    <MenuAccordionComp prettyName="Bolt" name="Bolt"></MenuAccordionComp>
    <MenuAccordionComp prettyName="Test" name="Test"></MenuAccordionComp>
</article>

<style>
  nav
  {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
      border-bottom: rgb(32, 33, 36) 2px solid;
  }

</style>


