<!--Code-->
<script>
	function handleLoad2DJson() {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.sendMessage(tabs[0].id, { message: "read_clipboard" }, response => {
				if (response) {
					console.log(response);
				} else {
					console.error("Failed to read from clipboard");
				}
			});
		})}

</script>

<!--Layout-->
<button on:click={handleLoad2DJson}>Load 2D JSON</button>

<!--Pico CSS StyleSheets-->
<style>

</style>