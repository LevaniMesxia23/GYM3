import { Link } from "react-router-dom";
import { useGetExperience } from "../../hooks/useExperience";
import { Mycontext } from "../../context/context";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AboutMe() {
  const { isDesktop, isTablet } = useContext(Mycontext);
  const { data, error, isLoading } = useGetExperience();
  const Image = data?.about[0]?.image;
  const Story = data?.about[0]?.story;

  if (error) return <div>Error: {error.message}</div>;

  const middleIndex = Story ? Math.floor(Story.length / 2) : 0;
  const firstHalf = Story ? Story.slice(0, middleIndex) : "";
  const secondHalf = Story ? Story.slice(middleIndex) : "";

  return (
    <div
      className={`pt-[3.75rem] pb-10 px-[2.5rem] flex ${
        isDesktop ? "flex-row" : "flex-col"
      } gap-10 bg-[#121212]`}
    >
      <div>
        <h1
          className="text-[24px] font-bold uppercase mb-6"
          style={{
            background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </h1>

        {isLoading ? (
          <Skeleton
            height={isDesktop || isTablet ? "26.4375rem" : "13.28631rem"}
            width={isDesktop || isTablet ? "587px" : "295px"}
            borderRadius="16px"
          />
        ) : (
          <img
            src={Image}
            alt="About Me"
            className={` ${
              isDesktop || isTablet
                ? "h-[26.4375rem] w-[587px]"
                : "h-[13.28631rem] w-[295px]"
            } rounded-[16px]`}
          />
        )}
      </div>

      <div
        className={`flex flex-col gap-6 lg:justify-between lg:mt-[4.25rem] ${
          isDesktop ? "w-[587px]" : "100%"
        }`}
      >
        {isLoading ? (
          <Skeleton
            count={2}
            width="100%"
            height="5.2rem"
            className="max-w-[36.6875rem] "
          />
        ) : isDesktop || isTablet ? (
          <p className="max-w-[36.6875rem] text-[#C4C4C4]">
            {firstHalf}
            <br />
            <br />
            {secondHalf}
          </p>
        ) : (
          <p className="max-w-[36.6875rem] text-[#C4C4C4]">{Story}</p>
        )}
        <div className="flex justify-start lg:justify-end">
          <Link to={"/stories"}>
            <button className="bg-[#B8D44A] text-[1rem] rounded-lg py-2 px-[3.325rem]">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
