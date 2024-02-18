export const actions = {
	async default({ request }) {
		const data = await request.formData();

		const resultaat = {
			naam: data.get('naam'),
			email: data.get('email'),
			opmerking: data.get('opmerking'),
			resultaten: Object.fromEntries(
				(JSON.parse(data.get('resultaten') as string) as string[]).map((resultaat, index) => [
					index + 1,
					resultaat
				])
			)
		};
		console.log(resultaat);

		return {
			success: true
		};
	}
};
