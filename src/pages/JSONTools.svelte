<!--Code-->
<script>
	async function handleLoad2DJson()
	{
		let clipText = await navigator.clipboard.readText();
		console.log(clipText);
	}

</script>

<!--Layout-->
<button on:click={handleLoad2DJson}>Load 2D JSON</button>
<button>Get Plan Images</button>

<!--Pico CSS StyleSheets-->
<style>
	button{
		font-size: 14px;
		padding: 2px;
	}

</style>