import { defineEnvVars } from '@sveltejs/kit/env';

// SYSTEME_MOCK is optional: unset means '' (mock off).
export const variables = defineEnvVars({
	THEHUDDLE_USER: { static: true },
	THEHUDDLE_PASSWORD: { static: true },
	POSTGRES_URL: { static: true },
	RESEND_API_KEY: { static: true },
	SYSTEME_API_KEY: { static: true },
	SYSTEME_MOCK: { schema: (input) => input ?? '' },
	THEHUDDLE_CLIENT_ID: { static: true },
	THEHUDDLE_TENANT_ID: { static: true },
	THEHUDDLE_CLIENT_SECRET: { static: true }
});
