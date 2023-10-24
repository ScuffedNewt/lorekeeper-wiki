<script>
	/** @type {import('./$types').PageData} */
	import Footer from '../../components/Footer.svelte';
	import BackButton from '../../components/BackButton.svelte';

	const files = import.meta.glob('../../modules/users/*.js');

	let file_dict = {};

	for (const modulePath in files) {
		const name = modulePath.split('/').pop().split('.')[0];
		const letter = name[0].toUpperCase();
		if (!(letter in file_dict)) {
			file_dict[letter] = [];
		}
		file_dict[letter].push({
			key: name,
			name: name
				.split('-')
				.map((word) => word[0].toUpperCase() + word.slice(1))
				.join(' ')
		});
	}

	// sort file_dict keys
	file_dict = Object.keys(file_dict)
		.sort()
		.reduce((acc, key) => {
			acc[key] = file_dict[key];
			return acc;
		}, {});
</script>

<BackButton />
<div class="container mt-3">
	<h1>Users</h1>
	<div class="container">
		<p>
			Here is a list of users who have contributed to the Lorekeeper framework or the Lorekeeper
			wiki.
		</p>
		<hr class="w-50 mx-auto" />
		{#each Object.keys(file_dict) as letter}
			<h2>{letter}</h2>
			<hr style="width: 2vw;" />
			<ul>
				{#each file_dict[letter] as file}
					<li>
						<a href="/users/{file.key}">{file.name}</a>
					</li>
				{/each}
			</ul>
		{/each}
		<p />
		<div class="text-muted text-center">
			<small>
				{Object.keys(file_dict).length} users found.
			</small>
		</div>
	</div>
	<Footer />
</div>
