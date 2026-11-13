import z from 'zod';

export const mailingFormSchema = z.object({
	email: z.string().email('Vul een geldig e-mailadres in.')
});
export const downloadFormSchema = mailingFormSchema;
export const signupFormSchema = z.object({
	name: z.string().trim().min(1, 'Vul je voornaam in.'),
	email: z.string().email('Vul een geldig e-mailadres in.')
});
export const trainingFormSchema = z.object({
	email: z.string().email('Vul een geldig e-mailadres in.'),
	name: z.string(),
	complaints: z.string().optional()
});

export const testForm = z.object({
	name: z.string(),
	email: z.string().email('Vul een geldig e-mailadres in.'),
	results: z.string(),
	note: z.string()
});
