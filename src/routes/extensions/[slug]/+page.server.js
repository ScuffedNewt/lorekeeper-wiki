import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';

/** @type {import('./$types').PageLoad} */

export function load({ params }) {

    // try find the page in the filesystem
    const { slug } = params;
    const path = `src/extensions/${slug}.json`;
    const file = JSON.parse(readFileSync(path, 'utf-8'));

    if (file) {
        return {
            key: file.key,
            name: file.name,
            url: file.url,
            description: file.description,
            contains: file.contains,
            commands: file.commands,
            images: file.images,
            credits: file.credits,
        };
    }

	throw error(404, 'Not found.');
}