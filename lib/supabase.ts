import { createClient } from "@supabase/supabase-js"

// Make sure these are the CORRECT KALAM environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Verify the URL is correct for KALAM
console.log("Supabase URL:", supabaseUrl)

// Create client with minimal configuration to avoid CORS issues
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Disable URL detection which can cause issues
  },
})
