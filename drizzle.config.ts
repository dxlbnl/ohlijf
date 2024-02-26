import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({
	path: './.env.development.local'
});

export default {
	schema: './src/lib/database.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env['POSTGRES_URL'] as string,
		database: process.env['POSTGRES_DATABASE'],
		user: process.env['POSTGRES_USER'],
		password: process.env['POSTGRES_PASSWORD'],
		host: process.env['POSTGRES_HOST'],
		ssl: true
	}
} satisfies Config;
