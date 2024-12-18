import  { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../../services/supabaseConfig";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useAddImage } from "../../../hooks/useAddImage";
import { useFetchAbout } from "../../../hooks/useFetchAbout";

export default function AboutHeader() {
  const [imagePreview, setImagePreview] = useState(null);
  const { mutate: addImage } = useAddImage();
  const {
    data: getAbout,
    isLoading,
    isError,
    error: aboutError,
  } = useFetchAbout();
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{aboutError.message}</p>;
  }

  let AboutImage = getAbout.about.at(-1)?.image;



  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    let imageUrl = null;

    try {
      const imageName = `${uuidv4()}_${data.image[0].name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("about")
        .upload(imageName, data.image[0]);

      if (uploadError) throw uploadError;

      imageUrl = uploadData.path;

      addImage({
        image: `https://ylzgfzyvohnqdlzlxrfw.supabase.co/storage/v1/object/public/about/${imageUrl}`,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile.");
    } finally {
      reset({
        image: null,
      });
      setImagePreview(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col my-[3.25rem]">
        <h1 className="text-[1.875rem] font-bold text-white">About Me</h1>
        <p className="text-[1rem] font-medium text-white">
          Add info for your clients
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[1.81rem]"
      >
        <p className="text-[1rem] font-medium text-white">
          Your Profile Picture
        </p>
        <div className="flex items-center gap-6">
          <div>
            <img
              className="rounded-full w-[5rem] h-[5rem]"
              src={imagePreview || AboutImage || ""}
              alt="Profile"
            />
          </div>
          <div className="flex gap-4">
            <label className="border-[1px] border-[#D7FD44] bg-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[12.1875rem] text-black">
              <p className="w-3 h-3">+</p>
              <p>Upload New</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image", {
                  required: "Please upload an image",
                  onChange: handleImagePreview,
                })}
              />
            </label>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#D7FD44] text-black px-6 py-2 rounded-3xl"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
