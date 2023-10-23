<script>
	import Footer from '../../../components/Footer.svelte';
	import BackButton from '../../../components/BackButton.svelte';
	export let data;
</script>

<BackButton />
<div class="container mt-3">
	<h1>
		<img
			src="/users/{data.config.avatar}"
			style="width:10vwpx; height:10vw; float:left; border-radius:50%; margin-right:25px;"
			alt={data.config.name}
		/>
		{data.config.name}
		{#if data.config.pronouns}
			<span class="text-muted m-1" style="font-size: 0.5em">
				- ({data.config.pronouns})
			</span>
		{/if}
	</h1>
	<div class="card p-3">
		{@html data.description}
	</div>

	<Footer />
</div>
