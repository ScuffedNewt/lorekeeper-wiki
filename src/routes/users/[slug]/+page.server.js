import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const { slug } = params;
	let { config, description } = await import(`../../../modules/users/${slug}.js`);

	if (!config) {
		return error(404, `Tutorial "${slug}" not found.`);
	}

	if (!description) {
		description = 'No description provided.';
	}

	return {
		config,
		description
	};
}
