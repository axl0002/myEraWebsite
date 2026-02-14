import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient;

export function getSupabase() {
  if (!supabase) {
    supabase = createClient(
      process.env.SUPABASE_URL!.trim(),
      process.env.SUPABASE_ANON_KEY!.trim().replace(/\s+/g, "")
    );
  }
  return supabase;
}
