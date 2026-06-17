CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Public insert policy (anyone can book an appointment)
CREATE POLICY "public_insert_appointments" ON appointments
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated staff can read/manage appointments
CREATE POLICY "staff_select_appointments" ON appointments
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "staff_update_appointments" ON appointments
  FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "staff_delete_appointments" ON appointments
  FOR DELETE TO authenticated
  USING (true);
