import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { POSTGRES_URL } from '$env/static/private';

const sql = neon(POSTGRES_URL);
export const db = drizzle(sql);

export * from './schema';
