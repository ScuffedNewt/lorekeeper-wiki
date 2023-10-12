<script>
    import Footer from "../../components/Footer.svelte";
    import BackButton from "../../components/BackButton.svelte"
    import credits from "$lib/credits.json"
</script>

<BackButton />
<div class="container mt-3">
    <h1>Credits</h1>
    <p>Many thanks to the following people for their contributions to the Lorekeeper framework and wiki.</p>
    <hr class="w-50 mx-auto" />
    <ul>
        {#each credits as credit}
            <li style="list-style:none;">
                <a href={credit.url} target="_blank">{credit.name}</a> - {credit.contribution}
            </li>
        {/each}
    </ul>
    <Footer />
</div>