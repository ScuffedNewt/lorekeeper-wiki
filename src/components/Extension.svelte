<script>
    import { Lightbox } from 'svelte-lightbox';
    export let key;
    export let name;
    export let url;
    export let description;
    export let contains;
    export let commands;
    export let credits;
    export let images;
</script>
<h3>
    <a href="{url}" target="_blank">{name}</a>
</h3>
<p>
    {#each description as line}
        {line}<br />
    {/each}
</p>
<hr class="mb-2">
{#if contains && contains.length > 0}
    <h4>Contains</h4>
    <ul>
        {#each contains as item}
            <li>
                <a href="{item[1]}" target="_blank">{item[0]}</a>
            </li>
        {/each}
    </ul>
    <hr class="mb-2">
{/if}
{#if commands && commands.length > 0}
    <h4>Commands</h4>
    <ul>
        {#each commands as command}
            <li>{command}</li>
        {/each}
    </ul>
    <hr class="mb-2">
{/if}
{#if images && images.length > 0}
    <h4>Images</h4>
    <div class="row">
        {#each images as image}
            <div class="col-4 my-2">
                <Lightbox description="{image}">
                    <img src="/extensions/{key}/{image}" alt="{image}" class="img-fluid img-thumbnail" />
                </Lightbox>
            </div>
        {/each}
    </div>
    <hr class="mb-2">
{/if}
{#if credits && credits.length > 0}
    <h5>Credits</h5>
    <ul>
        {#each credits as credit}
            <li style="list-style:none;">
                <a href="{credit[1]}">{credit[0]}</a>
            </li>
        {/each}
    </ul>
{/if}