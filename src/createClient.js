import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://looslmjpzcgfjdxjmqne.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvb3NsbWpwemNnZmpkeGptcW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDI4NzQsImV4cCI6MjA2NzAxODg3NH0.nCaYWmRBVUQgVU9DAmMRy-XgZ0oB-Cp5mc3YuWVtm9M";

export const supabase = createClient("https://looslmjpzcgfjdxjmqne.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvb3NsbWpwemNnZmpkeGptcW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDI4NzQsImV4cCI6MjA2NzAxODg3NH0.nCaYWmRBVUQgVU9DAmMRy-XgZ0oB-Cp5mc3YuWVtm9M");
