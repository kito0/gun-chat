import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

export const db = GUN();

export const user = db.user().recall({ sessionStorage: true });

export const username = writable('');

user.get('alias').on((data) => username.set(data));

db.on('auth', async (event) => {
	const alias = await user.get('alias');
	username.set(alias);

	console.log(`signed in as ${alias}`);
});
