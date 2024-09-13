import { createUser, findUserByEmail, login, updateUserLevels } from '$lib/thehuddle/api';
import { THEHUDDLE_USER, THEHUDDLE_PASSWORD } from '$env/static/private';

const baseLevelId = 53472;
const rustAankoopLevelId = 57520;

export const GET = async () => {
	await login(THEHUDDLE_USER, THEHUDDLE_PASSWORD);
	// await api.loadAdmin();
	// await api.getSettings();
	const firstname = 'Alex';
	const lastname = 'Doe';
	const email = 'test123@dxlb.nl';

	const user = await findUserByEmail(email);

	if (!user) {
		await createUser({
			firstname,
			lastname,
			email,
			level_ids: [baseLevelId, rustAankoopLevelId]
		});
	} else {
		await updateUserLevels(user.id, [...user.level_ids, rustAankoopLevelId]);
	}

	return new Response('User processed');
};
