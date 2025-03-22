import { createClient } from '@supabase/supabase-js'

const URL_SUPABASE = "https://yohwopoiyktwyiggkkoa.supabase.co";
const API_KEY_SUPABASE = import.meta.env.VITE_API_KEY_SUPABASE;

const supabase = createClient(URL_SUPABASE, API_KEY_SUPABASE);

export default supabase;