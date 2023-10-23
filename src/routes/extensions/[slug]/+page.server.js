import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const { slug } = params;
	let { config, description } = await import(`../../../modules/extensions/${slug}.js`);

	if (!config) {
		return error(404, `Extension "${slug}" not found.`);
	}

	if (!description) {
		description = 'No description provided.';
	}

	return {
		config,
		description
	};
}
