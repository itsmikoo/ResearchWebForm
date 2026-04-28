import { createClient } from '@supabase/supabase-js';

// Mengambil URL dan Key dari file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Membuat instance Supabase yang bisa dipakai di mana saja
export const supabase = createClient(supabaseUrl, supabaseAnonKey);