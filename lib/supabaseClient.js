import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://utbstvdnvlvxbxuewtme.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0YnN0dmRudmx2eGJ4dWV3dG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1ODM0ODUsImV4cCI6MTk5MjE1OTQ4NX0.rrWKd-vb9GbkGSrc-TDMFqRj9at3u2VuMoOMR3lULMw"
);
