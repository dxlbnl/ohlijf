import z from 'zod';

export const mailingFormSchema = z.object({
	email: z.string().email()
});
export const downloadFormSchema = mailingFormSchema;
export const trainingFormSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	complaints: z.string().optional()
});

export const testForm = z.object({
	name: z.string(),
	email: z.string().email(),
	results: z.string(),
	note: z.string()
});
