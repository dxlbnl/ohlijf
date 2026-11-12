import z from 'zod';

export const mailingFormSchema = z.object({
	email: z.string().email('Vul een geldig e-mailadres in.')
});
export const downloadFormSchema = mailingFormSchema;
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
