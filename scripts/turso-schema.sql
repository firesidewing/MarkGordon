-- Turso schema for course platform (Phase 2B)
-- Apply: turso db shell <db-name> < scripts/turso-schema.sql

CREATE TABLE IF NOT EXISTS enrollments (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id TEXT NOT NULL,
	course_slug TEXT NOT NULL,
	purchased_at TEXT NOT NULL,
	expires_at TEXT NOT NULL,
	clerk_subscription_id TEXT,
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	UNIQUE (user_id, course_slug)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments (user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_expires ON enrollments (expires_at);

CREATE TABLE IF NOT EXISTS lesson_completions (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id TEXT NOT NULL,
	course_slug TEXT NOT NULL,
	lesson_slug TEXT NOT NULL,
	completed_at TEXT NOT NULL DEFAULT (datetime('now')),
	UNIQUE (user_id, course_slug, lesson_slug)
);

CREATE INDEX IF NOT EXISTS idx_completions_user_course ON lesson_completions (user_id, course_slug);

CREATE TABLE IF NOT EXISTS lesson_progress (
	user_id TEXT NOT NULL,
	course_slug TEXT NOT NULL,
	lesson_slug TEXT NOT NULL,
	last_position_seconds INTEGER NOT NULL DEFAULT 0,
	updated_at TEXT NOT NULL DEFAULT (datetime('now')),
	PRIMARY KEY (user_id, course_slug, lesson_slug)
);
