// Pets extension - Newt

let config = {};

config['key'] = 'pets';
config['name'] = 'Pets';
config['url'] = 'https://github.com/Ne-wt/lorekeeper/tree/extension/pets';
config['icon'] = 'fas fa-paw';
config['commands'] = ['php artisan migrate', 'php artisan add-site-settings'];
config['images'] = [
    'variants.png',
    'pet_page.png'
];
config['credits'] = [
	['Newt', 'https://github.com/ne-wt'],
	['Uri', 'https://github.com/preimpression'],
	['Mercury', 'https://github.com/itinerare']
];

let description = /*html*/ `
    <div class="alert alert-info">Pets is an extension that adds pet objects to the game.</div>
    Pets work similarly to items, and can be equipped to a player's characters.
    <br>
    Pets can have variants that allow a diverse amount of images to appear under the same pet.
`;

export { config, description };
