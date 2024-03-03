CREATE TABLE IF NOT EXISTS "test_result" (
	"id" serial NOT NULL,
	"name" text,
	"email" text,
	"note" text,
	"results" jsonb,
	"created_at" timestamp DEFAULT now()
);
