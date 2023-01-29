<script>
  import MenuAccordionComp from "./MenuAccordionComp.svelte";
  import JSONTools from "./JSONTools.svelte";
  import Bolt from "./Bolt.svelte";
</script>


  <nav>
      <p><strong>QA Tools</strong></p>
  </nav>
    <MenuAccordionComp prettyName="JSON Tools" name="JSONTools" component={JSONTools}></MenuAccordionComp>
    <MenuAccordionComp prettyName="Bolt" name="Bolt" component={Bolt}></MenuAccordionComp>
    <MenuAccordionComp prettyName="Test" name="Test"></MenuAccordionComp>

<style>
  nav
  {
      display: flex;
      border-bottom: 1px solid;
      justify-content: center;
      align-content: center;
      margin-bottom: 10px;
  }
</style>


