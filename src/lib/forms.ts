import z from 'zod';

export const mailingFormSchema = z.object({
	email: z.string().email()
});
