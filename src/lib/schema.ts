import { pgTable, serial, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const testResult = pgTable('test_result', {
	id: serial('id'),
	name: text('name'),
	email: text('email'),
	note: text('note'),
	results: jsonb('results'),
	createdAt: timestamp('created_at').defaultNow()
});

export const contactLog = pgTable('contact_log', {
	id: serial('id'),
	name: text('name'),
	email: text('email'),
	message: text('message'),
	createdAt: timestamp('created_at').defaultNow()
});

export type NewTestResult = typeof testResult.$inferInsert;
export type NewContactLog = typeof contactLog.$inferInsert;
