<script>
  export let name;
  export let prettyName;
  export let component;

</script>
<details>
  <summary>{prettyName}</summary>
    <svelte:component this={component} name={name} ></svelte:component>
</details>


<style>
summary{
    font-size: 14px;
}
</style>