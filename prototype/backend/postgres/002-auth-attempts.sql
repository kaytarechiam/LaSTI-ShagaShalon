-- Idempotent addition for distributed login throttling.
CREATE TABLE IF NOT EXISTS auth_attempts (
  key text PRIMARY KEY,
  count integer NOT NULL,
  expires bigint NOT NULL
);
CREATE INDEX IF NOT EXISTS auth_attempts_expires ON auth_attempts(expires);
