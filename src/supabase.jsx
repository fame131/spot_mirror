import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dgndzwlaovcpwrrdotwm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbmR6d2xhb3ZjcHdycmRvdHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjQxOTYsImV4cCI6MjA3ODEwMDE5Nn0.VkjWijQT7swsEHIp3RyCBW4FEKzzA3Zw7pt70bTUzI8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)