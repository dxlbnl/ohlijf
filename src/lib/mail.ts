import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const mailHome = (subject: string, text: string) =>
	resend.emails.send({
		from: 'ohlijf@ohlijf.dexterlabs.nl',
		to: 'info@ohlijf.com',
		subject,
		text
	});
