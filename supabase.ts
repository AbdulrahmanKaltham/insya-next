import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://lxoelfdzrcvwccmkvkpu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b2VsZmR6cmN2d2NjbWt2a3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTc3ODIsImV4cCI6MjA5MTM5Mzc4Mn0.TIx5gF5rmd__W0x0eqcTDrZxbyfmRbMrQ2FLZj9t9xU'
);