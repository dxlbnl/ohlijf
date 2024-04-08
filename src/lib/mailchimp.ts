import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import hash from 'crypto-js/md5';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});
const listId = '24d1c1cc3a';
const getsubscriberHash = (email: string) => hash(email.toLowerCase());

type AddProps = {
	email: string;
	tags: string[];
	name?: string;
};
export const addOrUpdateMailinglistMember = async ({ email, tags, name }: AddProps) => {
	const subscriberHash = getsubscriberHash(email);
	let listMember;

	try {
		listMember = await mailchimp.lists.getListMember(listId, subscriberHash);
	} catch (_) {
		console.log('Failed to get mailchimp member, create one', email);
	}

	if (listMember) {
		console.log('Updating mailchimp member', email);
		if (name) {
			await mailchimp.lists.updateListMember(listId, subscriberHash, {
				merge_fields: {
					FNAME: name
				}
			});
		}

		await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
			tags: tags.map((tag) => ({ name: tag, status: 'active' }))
		});
	} else {
		console.log('Adding mailchimp member', email);

		await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: 'subscribed',
			tags,
			...(name
				? {
						FNAME: name
					}
				: {})
		});
	}
};
