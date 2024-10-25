import { supabase } from './supabaseConfig';

const fetchExperience = async () => {
let { data: about, error } = await supabase
    .from('about')
    .select('*')
    
    return {about, error}
}
export default fetchExperience