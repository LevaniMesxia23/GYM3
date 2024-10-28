import { supabase } from "./supabaseConfig";

export const fetchExperience = async () => {
  let { data: about, error } = await supabase.from("about").select("*");
  return { about, error };
};

export const fetchSuccessStory = async () => {
  let { data: about, error } = await supabase.from("successStory").select("*");
  return { about, error };
};
export const fetchServices = async () => {
  let { data, error } = await supabase.from("services").select("*");
  return { data, error };
};
export const fetchCertification = async () => {
  let { data, error } = await supabase.from("certification").select("*");
  return { data, error };
};

export const fetchPrices = async () => {
  let { data: about, error } = await supabase.from("prices").select("*");
  return { about, error };
};
