import { useCertification } from "../../../hooks/useCertification";
import useEditAbout from "../../../hooks/useEditAbout";
import { useFetchAbout } from "../../../hooks/useFetchAbout";
import UpdateButton from "./UpdateButton";

export default function AboutMainInfo() {
  const { data, isLoading, error, isError } = useFetchAbout();
  const { data: certifications } = useCertification();
  const editAbout = useEditAbout();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  function aboutFormAction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formAction = Object.fromEntries(formData);

    const updatedAbout = {
      story: formAction.story,
    };

    editAbout.mutate(
      { id: data.about[0].id, updatedAbout },
      {
        onSuccess: () => {
          console.log("About info updated successfully!");
        },
        onError: (error) => {
          console.error("Failed to update about info:", error.message);
        },
      }
    );
  }

  const { story, id } = data.about[0];
  const certification = certifications?.data;
  const certificationMap = certification?.map((item) => item.name).join("\n");

  return (
    <div className="flex flex-col gap-3 mt-[1.87rem]">
      <form onSubmit={aboutFormAction}>
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-col w-full gap-3">
            <p className="text-white">Share your story</p>
            <textarea
              className="placeholder:w-[34rem] w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
              placeholder="Hi, I'm Tuna, a personal trainer dedicated to helping people transform through fitness. My journey began when I overcame my own struggles with body confidence and health. Now, I use my experience to empower others to achieve their fitness goals..."
              name="story"
              cols="30"
              rows="7"
              defaultValue={story}
            ></textarea>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col w-full gap-3">
              <label className="text-white">Certification</label>
              <textarea
                className="h-[200px] w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
                placeholder="List your certifications"
                name="certification"
                rows="5"
                defaultValue={certificationMap}
              ></textarea>
            </div>
            <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]">
              <p className="w-3 h-3 text-black">+</p>
              <p className="text-[#D7FD44]">Add Experience</p>
            </div>
          </div>
        </div>
        <UpdateButton />
      </form>
    </div>
  );
}
