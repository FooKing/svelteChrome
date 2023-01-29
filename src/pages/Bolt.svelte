<script>
	let activeTab = "tab1";
</script>
<!--Tabs-->
<div class="tabsContainer">
	<div class="tabHeadingContainer">
		<div class="tabHeading" on:click={() => activeTab = "tab1"}>Tab 1</div>
		<div class="tabHeading" on:click={() => activeTab = "tab2"}>Tab 2</div>
		<div class="tabHeading" on:click={() => activeTab = "tab3"}>Tab 3</div>
	</div>

	<!--Tab content-->
	<div class="tabContentContainer">
		{#if activeTab === "tab1"}
			<div class="tabContent">Content 1</div>
		{:else if activeTab === "tab2"}
			<div class="tabContent">Content 2</div>
		{:else if activeTab === "tab3"}
			<div class="tabContent">Content 3</div>
		{/if}
	</div>
</div>



<style>
	.tabHeadingContainer{
		flex: 0 0 25%;
		overflow: auto;
	}

	.tabContentContainer{
		flex: 0 0 75%;
		overflow: auto;
	}

	.tabsContainer {
		display: flex;
		height: 300px;
		flex-wrap: nowrap;
		overflow: hidden;
		padding: 10px;
		border: solid #05f40f 1px;
		border-radius: 2px;
	}

	.tabHeading{
		padding: 10px;
		margin-right: 10px;
		border-bottom: solid transparent 3px;
		cursor: pointer;
	}
	.tabHeading:hover{
	color: var(--primary-hover);
	}
	.tabHeading:active{
		border-bottom: #05f40f solid 2px;
	}

</style>