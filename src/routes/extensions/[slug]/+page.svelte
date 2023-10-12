<script>
	import Extension from "../../../components/Extension.svelte";
    import Footer from "../../../components/Footer.svelte";
    import BackButton from "../../../components/BackButton.svelte";
    export let data;
</script>

<BackButton />
<div class="container mt-3">
    <Extension
        key={data.key}
        name={data.name}
        url={data.url}
        description={data.description}
        contains={data.contains}
        commands={data.commands}
        images={data.images}
        credits={data.credits}
    />
</div>
<Footer />
