import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ycurehxhbyiturcqhyuj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljdXJlaHhoYnlpdHVyY3FoeXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDgyMjgsImV4cCI6MjA5MDA4NDIyOH0.u69vX6OLsKaseUVjjhIZ5dWVl6P1w5ztJNeTDIjqeXo';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are missing. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);