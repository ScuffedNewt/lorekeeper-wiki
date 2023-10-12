<script>
	/** @type {import('./$types').PageData} */
    import Footer from '../../components/Footer.svelte';
    import BackButton from "../../components/BackButton.svelte";

    const files = import.meta.glob("../../extensions/*.json");

    let file_dict = {};

    for (const modulePath in files) {
        files[modulePath]().then(({ default: file }) => {
            // get first letter of file name
            const first_letter = file.name[0].toUpperCase();
            // check if key exists
            if (file_dict[first_letter]) {
                // if it does, append to array
                file_dict[first_letter].push(file);
            } else {
                // if it doesn't, create array
                file_dict[first_letter] = [file];
            }
        });
    }

    // sort file_dict keys
    file_dict = Object.keys(file_dict).sort().reduce((acc, key) => {
        acc[key] = file_dict[key];
        return acc;
    }, {});
</script>

<BackButton />
<div class="container mt-3">
    <h1>Extensions</h1>
    <div class="container">
        <p>
            Here is a list of current extensions for the Lorekeeper framework.
            <hr class="w-50 mx-auto" />
            {#each Object.keys(file_dict) as letter}
                <h2>{letter}</h2>
                <ul>
                    {#each file_dict[letter] as file}
                        <li>
                            <a href="/extensions/{file.key}">{file.name}</a>
                        </li>
                    {/each}
                </ul>
            {/each}
        <p>
    </div>
    <Footer />
</div>