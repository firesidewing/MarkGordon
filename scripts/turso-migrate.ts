/**
 * Apply Turso schema (scripts/turso-schema.sql).
 * Usage: bun --env-file=.env run db:migrate
 */
import { createClient } from '@libsql/client';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
	console.error('TURSO_DATABASE_URL is required. Copy .env.example → .env or pass --env-file.');
	process.exit(1);
}

const schemaPath = join(dirname(fileURLToPath(import.meta.url)), 'turso-schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');

const statements = schema
	.split(';')
	.map((s) => s.replace(/--.*$/gm, '').trim())
	.filter((s) => s.length > 0);

const client = createClient({ url, authToken });

console.log(`Applying ${statements.length} statements to ${url}…`);

for (const sql of statements) {
	await client.execute(sql);
	console.log(`  ✓ ${sql.split('\n')[0].trim()}`);
}

console.log('Done.');
