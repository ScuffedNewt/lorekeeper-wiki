<script>
	import { Lightbox } from 'svelte-lightbox';
	export let key, name, url, icon, description, contains, commands, images, credits;
</script>

<h3>
	<a href={url} target="_blank"><i class="{icon} mr-1" />{name}</a>
</h3>
<p>
	<!-- render the newlines in description -->
	{#each description.split('\n') as line}
		{@html line}
	{/each}
</p>
<hr class="mb-2" />
{#if contains && contains.length > 0}
	<h4>Contains</h4>
	<ul>
		{#each contains as item}
			<li>
				<a href={item[1]} target="_blank">{item[0]}</a>
			</li>
		{/each}
	</ul>
	<hr class="mb-2" />
{/if}
{#if commands && commands.length > 0}
	<h4>Commands</h4>
	<ul>
		{#each commands as command}
			<li>{command}</li>
		{/each}
	</ul>
	<hr class="mb-2" />
{/if}
{#if images && images.length > 0}
	<h4>Images</h4>
	<div class="row">
		{#each images as image}
			<div class="col-4 my-2">
				<Lightbox description={image}>
					<img src="/extensions/{key}/{image}" alt={image} class="img-fluid img-thumbnail" />
				</Lightbox>
			</div>
		{/each}
	</div>
	<hr class="mb-2" />
{/if}
{#if credits && credits.length > 0}
	<h5>Credits</h5>
	<ul>
		{#each credits as credit}
			<li style="list-style:none;">
				<a href={credit[1]} target="_blank">{credit[0]}</a>
			</li>
		{/each}
	</ul>
{/if}
