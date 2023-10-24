// Claymores and Companions

let config = {};

config['key'] = 'claymores-and-companions';
config['name'] = 'Claymores and Companions';
config['url'] = 'https://github.com/Ne-wt/lorekeeper/tree/extension/claymores-and-companions';
config['icon'] = 'fas fa-shield-alt';
config['contains'] = [
	['Pets', 'https://github.com/Ne-wt/lorekeeper/tree/extension/pets'],
	['Levels & Stats', 'https://github.com/Ne-wt/lorekeeper/tree/extension/levels+stats'],
	['Character Skills', 'https://github.com/Ne-wt/lorekeeper/tree/extension/character-skills']
];
config['commands'] = [
	'php artisan migrate',
	'php artisan add-site-settings',
	'php artisan add-levels'
];
config['credits'] = [
	['Newt', 'https://github.com/ne-wt'],
	['Uri', 'https://github.com/preimpression'],
	['Mercury', 'https://github.com/itinerare']
];

let description = /*html*/ `
    Claymores and Companions is an RPG inspired extension that adds a multitude of features to Lorekeeper.
    <br>Claymores includes levelling, character stats, gear, weapons, pets, and more.
`;

export { config, description };
