<script>
	import Footer from '../../../components/Footer.svelte';
	import BackButton from '../../../components/BackButton.svelte';
	export let data;
</script>

<BackButton />
<div class="container mt-3">
	<h1>
		<img
			src="/images/users/{data.config.avatar}"
			style="width:13vw; height:13vw; float:left; border-radius:50%; margin-right:25px;"
			alt={data.config.name}
		/>
		{data.config.name}
		{#if data.config.pronouns}
			<span class="text-muted m-1" style="font-size: 0.5em">
				- ({data.config.pronouns})
			</span>
		{/if}
	</h1>
	<div class="card">
		<div class="card-header">
			<div style="display:flex;">
				{#each data.config.urls as url}
					{#if typeof url[2] != 'undefined'}
						<div class="me-2" data-toggle="tooltip" data-placement="top" title="{url[0]}" >
							<a href={url[1]} target="_blank">
								<i class="{url[2]} fa-lg"/>
							</a>
						</div>
					{:else}
						<a href={url[1]} target="_blank">
							{url[0]}
						</a>
					{/if}
				{/each}
			</div>
		</div>
		<div class="card-body p-3">
			{@html data.description}
		</div>
		<div class="card-footer">
			<h5 class="mb-3">Extensions</h5>
			<ul>
				<div class="row">
				{#each data.extensions as extension}
					<div class="col-md-6">
						<li>
							<a href="/extensions/{extension.key}">
								{extension.name}
							</a>
						</li>
					</div>
				{/each}
				</div>
			</ul>
		</div>
	</div>

	<Footer />
</div>
