import { supabase } from "./supabaseConfig";

export const fetchAbout = async () => {
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

export const fetchPricesId = async (priceId) => {
  let { data: about, error } = await supabase
    .from("prices")
    .select("*")
    .eq("id", priceId);
  return { about, error };
};

export const AddServices = async (addServices) => {
  const { data: services, error } = await supabase
    .from("prices")
    .insert([addServices]);

  if (error) throw new Error(error.message);
  return { services, error };
};

export const editPrices = async (id,updatedData) => {
  const { data: services, error } = await supabase
    .from("prices")
    .update(updatedData)
    .eq("id", id);
  if (error) throw new Error(error.message);
};

export const editAboutInfo = async (id,updatedAbout) => {
  const { data: editAbout, error } = await supabase
    .from("about")
    .update(updatedAbout)
    .eq("id", id);
    console.log(editAbout);
  if (error) throw new Error(error.message);
  return editAbout;
};

export const addCertification = async (addCerf) => {
  const {data: addCertificate, error} = await supabase
  .from("certification")
  .insert([addCerf])
  if(error) throw new Error(error.message)
  return addCertificate
}

export const deleteCertification = async (id) => {
  const {data: deleteCertificate, error} = await supabase
  .from("certification")
  .delete()
  .eq("id", id)
  if(error) throw new Error(error.message)
  return deleteCertificate
}

export const editCertificateInfo = async (id,updatedCertificate) => {
  const { data: editCertificate, error } = await supabase
    .from("certification")
    .update(updatedCertificate)
    .eq(id, "id")
    .select()
    console.log(editCertificate);
  if (error) throw new Error(error.message);
  return editCertificate;
};

export const clientInfo = [
  {
    name: "User Name Name",
    day: 14,
    month: "october",
    year: 2024,
    new: true,
    rating: 3,
    review:
      "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
  },
  {
    name: "User Name Name",
    day: 20,
    month: "November",
    year: 2022,
    new: false,
    rating: 4,
    review:
      "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
  },
  {
    name: "User Name Name",
    day: 14,
    month: "october",
    year: 2024,
    new: true,
    rating: 4,
    review:
      "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
  },
  {
    name: "User Name Name",
    day: 14,
    month: "october",
    year: 2024,
    new: true,
    rating: 4,
    review:
      "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
  },
];
