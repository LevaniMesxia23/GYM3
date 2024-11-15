import { useGetExperience } from "../../hooks/useExperience";
import arrows from "../../../public/threeArrow.svg";
import star from "../../../public/star11.svg";
import star5 from "../../../public/star5.svg";
import { useCertification } from "../../hooks/useCertification";
import About from "./About";
import GirlRun from "/girlRun.png";
import StoryCarousel from "../SuccessStory/StoryCarousel";
import Check from "/check.png";
const Certification = () => {
  const { data } = useGetExperience();
  const { data: certifications } = useCertification();
  const story = data?.about[0]?.story;
  const exp = data?.about[0].experience;
  const certification = certifications?.data;
  console.log(certification);

  return (
    <div className="bg-[#121212] pb-[5rem]">
      <div className=" object-cover md:w-[92%] mx-auto mb-[5rem]">
        <img
          className="rounded-lg mx-auto w-[95%] md:w-[100%] "
          src={GirlRun}
        />
      </div>
      <div className="flex flex-col  items-center justify-center mx-auto w-[92%]">
        <About arrows={arrows} story={story} star={star} exp={exp} />
        <div className="flex flex-col w-full  pt-14  gap-10 bg-[#121212]">
          <div className="flex gap-3 items-center">
            <img src={arrows} className="w-[80px]" />
            <h3
              style={{
                background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className=" text-[16px] font-bold"
            >
              Certifications
            </h3>
          </div>
          <div className="text-white md:grid-cols-3 md:grid md::grid-cols-2 bg-[#121212] flex flex-col gap-3 mb-[5rem]">
            {certification?.map((certification, i) => (
              <span
                key={i}
                className="flex text-[#FFFFFF] leading-[21.8px] items-start text-[14px] gap-2"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-10">
                    <img className="w-10 h-10" src={star5} />
                  </div>
                  <img
                    className="absolute w-[0.94213rem] h-[0.94213rem] "
                    src={Check}
                    alt=""
                  />
                </div>
                {certification.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[98%] mx-auto">
        <StoryCarousel />
      </div>
    </div>
  );
};

export default Certification;
