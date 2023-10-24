<script>
	import { Lightbox } from 'svelte-lightbox';
	export let key, name, version, url, icon, description, contains, commands, images, credits;

	// check if any extensions from contains are in the list of extensions
	// if so, link their wiki page
	if (contains) {
		const files = import.meta.glob('../modules/extensions/*.js');
		contains = contains.map((item) => {
			const key = item[1].split('/').pop().split('.')[0];
			if (files[`../modules/extensions/${key}.js`]) {
				return [item[0], `/extensions/${key}`];
			} else {
				return item;
			}
		});
	}

	// check credits if they have a wiki link also
	if (credits) {
		const files = import.meta.glob('../modules/users/*.js');
		credits = credits.map((item) => {
			const key = item[0].toLowerCase().replace(' ', '-');
			if (files[`../modules/users/${key}.js`]) {
				return [item[0], `/users/${key}`];
			} else {
				return item;
			}
		});
	}
</script>

<h3>
	<a href={url} target="_blank"><i class="{icon} me-1" />{name}</a>{#if version} <small class="text-muted ms-2"><small> - v{version}</small></small>{/if}
</h3>
<p>
	<!-- render the newlines in description -->
	{#each description.split('\n') as line}
		{@html line}
	{/each}
</p>
<hr class="mb-2" />
<div class="row">
	{#if contains && contains.length > 0}
		<div class="col">
			<h4>Contains</h4>
			<ul>
				{#each contains as item}
					<li>
						<a href={item[1]} target="_blank">{item[0]}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	{#if commands && commands.length > 0}
		<div class="col">
			<h4>Commands</h4>
			<ul>
				{#each commands as command}
					<li>{command}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
<hr class="mb-2" />
{#if images && images.length > 0}
	<h4>Images</h4>
	<div class="row">
		{#each images as image}
			<div class="col-4 my-2">
				<Lightbox description={image}>
					<img src="/images/extensions/{key}/{image}" alt={image} class="img-fluid img-thumbnail" />
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
