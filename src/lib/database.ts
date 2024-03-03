import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { pgTable, serial, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const db = drizzle(sql);

export const testResult = pgTable('test_result', {
	id: serial('id'),
	name: text('name'),
	email: text('email'),
	note: text('note'),
	results: jsonb('results'),
	createdAt: timestamp('created_at').defaultNow()
});

export type NewTestResult = typeof testResult.$inferInsert;
