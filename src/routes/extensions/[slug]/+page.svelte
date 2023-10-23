<script>
	import Extension from '../../../components/Extension.svelte';
	import Footer from '../../../components/Footer.svelte';
	import BackButton from '../../../components/BackButton.svelte';
	export let data;
</script>

<BackButton />
<div class="container mt-3">
	<Extension
		key={data.config.key}
		name={data.config.name}
		url={data.config.url}
		icon={data.config.icon}
		description={data.description}
		contains={data.config.contains}
		commands={data.config.commands}
		images={data.config.images}
		credits={data.config.credits}
	/>
</div>
<Footer />
