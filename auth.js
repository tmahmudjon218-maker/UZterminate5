// auth.js

// Importing Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
dconst supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

// Signup function
export const signup = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });
    return { user, error };
};

// Login function
export const login = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });
    return { user, error };
};

// Logout function
export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
};

// To use these functions, import them in your component:
// import { signup, login, logout } from './auth';