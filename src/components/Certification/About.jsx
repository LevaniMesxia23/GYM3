import PropTypes from "prop-types";
import { useFetchAbout } from "../../hooks/useFetchAbout";
import arrows from "../../../public/threeArrow.svg";
import star from "../../../public/star11.svg";
const About = () => {
  const { data, error, isLoading, isError } = useFetchAbout();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const {story,experience} = data?.about[0]
  const yearExp = experience.split("").filter(char => !isNaN(char)).join("")

  return (
    <div className=" flex flex-col gap-5 text-[#C4C4C4] leading-[27.2px] text-[18px] ">
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
          ABOUT ME
        </h3>
      </div>
      <div className="flex flex-col gap-12 md:justify-between md:items-center  md:flex-row">
        <p className="text-white  flex flex-col gap-3 md:w-[60%]   ">
          <span>{story}</span>
        </p>
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <div className=" relative flex justify-center items-center">
            <img
              src={star}
              className="lg:w-[12.5rem] lg:h-[12.5rem] w-[5rem] h-[5rem]"
            />
            <span className=" absolute text-[1.5rem] lg:text-[2.5rem] font-bold text-black">
              {yearExp}+
            </span>
          </div>
          <span className="text-white ">{yearExp} Years Of Training Experience</span>
        </div>
      </div>
    </div>
  );
};
About.propTypes = {
  arrows: PropTypes.string,
  story: PropTypes.string,
  star: PropTypes.string,
  exp: PropTypes.string,
};

export default About;
