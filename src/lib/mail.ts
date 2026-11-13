import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

// Resend reports failures in `error` instead of throwing; throw so callers' catch blocks see them.
export const mailHome = async (subject: string, text: string) => {
	const { data, error } = await resend.emails.send({
		from: 'ohlijf@lab.dxlb.nl',
		to: 'info@ohlijf.com',
		subject,
		text
	});
	if (error) throw new Error(`Resend: ${error.message}`);
	return data!;
};
