import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlaathozoiruykebbtag.supabase.co';
const supabaseAnonKey = 'sb_publishable_HrGWJDy-CI2kx5P78-MGZA_8zFj8kHi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
