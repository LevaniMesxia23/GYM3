import { useContext, useState } from "react";
import { useCertification } from "../../../hooks/useCertification";
import { useFetchAbout } from "../../../hooks/useFetchAbout";
import { Mycontext } from "../../../context/Context";
import useEditAbout from "../../../hooks/useEditAbout";
import UpdateButton from "./UpdateButton";
import CertificateAddModal from "./CertificateAddModal";
import useAddCertification from "../../../hooks/useAddCertification";
import { useDeleteCertification } from "../../../hooks/useDeleteCertificate";
import useEditCertification from "../../../hooks/useEditCertification";

export default function AboutMainInfo() {
  const [certificateText, setCertificateText] = useState("");
  const [certificateStart, setCertificateStart] = useState("");
  const {openCertificateModal,setOpenCertificateModal,selectedCertificateId,setSelectedCertificateId} = useContext(Mycontext);
  const { data, isLoading, error, isError } = useFetchAbout();
  const { data: certifications } = useCertification();
  const { mutate: deleteCertification } = useDeleteCertification();
  const { addCertificateInfo } = useAddCertification();
  const editCertification = useEditCertification()
  // const {mutate: editCertification} = useEditCertification()
  const editAbout = useEditAbout()

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
      experience: formAction.experience,
    };
    const updatedCertificate = {
      certification : formAction.certification
    }
    console.log(updatedCertificate);
    console.log(formAction.certificate);

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
    )
    if (selectedCertificateId) {
      editCertification.mutate(
        {
          id: selectedCertificateId,
          certification:  {updatedCertificate : formAction.certification} ,
        },
        {
          onSuccess: () => console.log("Certification updated successfully!"),
          onError: (error) => console.error("Failed to update certification:", error.message),
        }
      );
    }

    if (certificateText.trim() != "") {
      try {
        addCertificateInfo({
          name: certificateText,
        });
        setCertificateText("");
      } catch (error) {
        console.error(error);
      }
    }

    // editCertification({selectedCertificateId, updateCertification})
    // console.log(updateCertification, "update cert");
  }

  // const handleCertificationEdit = (id) = {
  // }

  const handleOpenCertificateModal = (id) => {
    setSelectedCertificateId(id);
    // setOpenCertificateModal(true);
    console.log(id);
  };

  const handleDelete = (id) => {
    deleteCertification(id);
  };

  const { story, experience } = data.about[0];
  const certification = certifications?.data;

  return (
    <div className="flex flex-col gap-3 mt-[1.87rem]">
      <form onSubmit={aboutFormAction}>
        <div className="flex flex-col w-full gap-6">
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

          <div>
            <p className="text-white">Experience</p>
            <input
              type="number"
              name="experience"
              placeholder="add your experience"
              defaultValue={experience}
              className="placeholder:w-[34rem] w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 ">
              <label className="text-white">Certification</label>
              {certification?.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#323232] p-[0.625rem] shadow-lg rounded-lg"
                >
                  <div className="w-full flex items-center justify-between   rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]">
                    <input
                      name="certification"
                      className="placeholder:w-[34rem] w-[70%]  rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
                      defaultValue={item.name}
                    />
                    <p onClick={() => handleOpenCertificateModal(item.id)}>Edit</p>
                    <img
                      src="/delete.png"
                      className="w-4 h-4"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between py-6 bg-transparent rounded-lg ">
                    <div className="flex flex-col">
                      <label className="text-green-300">Start Date:</label>
                      <input
                        type="text"
                        defaultValue={item.startDate}
                        className="px-4 py-2 border border-gray-300 bg-[#323232] text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Start Date"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-red-300">End Date:</label>
                      <input
                        type="text"
                        defaultValue={item.endDate}
                        className="px-4 py-2 border border-gray-300 bg-[#323232] text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        placeholder="End Date"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {openCertificateModal && (
              <CertificateAddModal
                certificateText={certificateText}
                setCertificateText={setCertificateText}
                certificateStart={certificateStart}
                setCertificateStart={setCertificateStart}
              />
            )}
            <div className="flex justify-center items-center py-4">
              <div
                className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]"
                onClick={() => handleOpenCertificateModal(null)}
              >
                <p className="w-3 h-3 text-[#D7FD44]">+</p>
                <p className="text-[#D7FD44]">Add Experience</p>
              </div>
            </div>
          </div>
        </div>
        <UpdateButton />
      </form>
    </div>
  );
}
