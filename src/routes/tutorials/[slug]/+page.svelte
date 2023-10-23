<script>
	import Footer from '../../../components/Footer.svelte';
	import BackButton from '../../../components/BackButton.svelte';
	export let data;
</script>

<BackButton />
<div class="container mt-3">
	<h1>
		{data.config.title}
		<!-- implode config.authors -->
		<span class="text-muted m-1" style="font-size: 0.5em">
			by
			{#each data.config.authors as author}
				<a href={author[1]} target="_blank" rel="noopener noreferrer">
					{author[0]}
				</a>
			{/each}
		</span>
	</h1>
	{#if data.config.contents}
		<div class="card p-2 m-3" style="width: 13em; background-color: #f7f7f7;">
			<b>Table of Contents</b>
			<ul>
				{#each data.config.contents as item}
					<li>
						<a href={item[1]}>{item[0]}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	<div class="container">
		<p>
			{@html data.description}
		</p>
	</div>
	<Footer />
</div>
