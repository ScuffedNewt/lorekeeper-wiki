import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const { slug } = params;
	let { config, description } = await import(`../../../modules/users/${slug}.js`);

	if (!config) {
		return error(404, `User "${slug}" not found.`);
	}

	if (!description) {
		description = 'No description provided.';
	}

	// get all extensions made by this user
	// iterate through all extensions, and find the ones that have this user as an author
	const files = Object.entries(import.meta.glob('../../../modules/extensions/*.js'))
	// async iterate over files and import
	const extensions = [];
	for await (const [path] of files) {
		const { config } = await import(path /* @vite-ignore */);
		// check if user is in the credits
		for await (const author of config.credits) {
			if (author[0].toLowerCase() == slug.toLowerCase()) {
				extensions.push(config);
			}
		}
	}

	return {
		config,
		description,
		extensions
	};
}
