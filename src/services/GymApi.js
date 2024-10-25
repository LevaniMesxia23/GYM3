import { supabase } from './supabaseConfig';

export const fetchExperience = async () => {
let { data: about, error } = await supabase
    .from('about')
    .select('*')
    return {about, error}
}
