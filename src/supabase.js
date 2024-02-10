import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pvudntkevwlbvzrksaam.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWRudGtldndsYnZ6cmtzYWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MTQ1MjgsImV4cCI6MjAyMzA5MDUyOH0.op2OSRypM9nAg1neVchqSDonAL_GIuTezGHigrWrxHo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
