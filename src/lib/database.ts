import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { POSTGRES_URL } from '$env/static/private';
import * as schema from './schema';

const sql = neon(POSTGRES_URL);
export const db = drizzle(sql);

// Re-export schema for convenience in the app
export * from './schema';
