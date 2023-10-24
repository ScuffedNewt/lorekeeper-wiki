// Dungeons

let config = {};

config['key'] = 'dungeons';
config['name'] = 'Dungeons';
config['url'] = 'https://github.com/Ne-wt/lorekeeper/';
config['icon'] = 'fas fa-dungeon';
config['contains'] = [
	['Pets', 'https://github.com/Ne-wt/lorekeeper/tree/extension/pets'],
	['Levels & Stats', 'https://github.com/Ne-wt/lorekeeper/tree/extension/levels+stats'],
	['Character Skills', 'https://github.com/Ne-wt/lorekeeper/tree/extension/character-skills'],
	[
		'Claymores and Companions',
		'https://github.com/Ne-wt/lorekeeper/tree/extension/claymores-and-companions'
	]
];
config['commands'] = [
	'php artisan migrate',
	'php artisan add-site-settings',
	'php artisan add-levels'
];
config['credits'] = [['Newt', 'https://github.com/ne-wt']];

let description = /*html*/ `
    <div class="alert alert-warning">Dungeons is a work in progress.</div>
`;

export { config, description };
