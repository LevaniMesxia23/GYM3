import PropTypes from "prop-types";
const About = ({ arrows, story, star, exp }) => {
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
          <span className="hidden md:inline">
            Now, I specialize in personalized training programs tailored to your
            unique goals—whether it’s weight loss, strength training, or simply
            feeling healthier and happier. I believe in creating sustainable
            routines that fit seamlessly into your lifestyle
          </span>
          <span className="hidden md:inline">
            Fitness is about both body and mind. I’m here to guide, support, and
            challenge you on your journey to becoming the best version of
            yourself. Let’s work together to achieve your goals and embrace a
            stronger, healthier you!
          </span>
        </p>
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <img src={star} className="lg:w-[100px]" />
          <span className="text-white ">{exp}</span>
        </div>
      </div>
    </div>
  );
};
About.propTypes = {
  arrows: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
};

export default About;
