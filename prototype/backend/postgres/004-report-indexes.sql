-- Additive report indexes; does not modify or remove existing records.
CREATE INDEX IF NOT EXISTS reservations_day_idx ON reservations(day);
CREATE INDEX IF NOT EXISTS invoices_created_idx ON invoices(created);
CREATE INDEX IF NOT EXISTS payments_created_idx ON payments(created);
CREATE INDEX IF NOT EXISTS feedback_created_idx ON feedback(created);
