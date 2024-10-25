import { Link } from "react-router-dom";
import { useGetExperience } from "../../hooks/useExperience";

function AboutMe() {
  const { data, error, isLoading } = useGetExperience();
  const Image = data?.about[0]?.image;
  const Story = data?.about[0]?.story;

  if (isLoading) return <div className="text-red-500">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const middleIndex = Math.floor(Story.length / 2);
  const firstHalf = Story.slice(0, middleIndex);
  const secondHalf = Story.slice(middleIndex);

  return (
    <div className="pt-[3.75rem] px-[5rem] flex flex-col gap-10 bg-[#121212]">
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

        <img
          src={Image}
          alt="About Me"
          className="h-[26.4375rem] w-[587px] rounded-[16px]"
        />
      </div>

      <div className="flex flex-col gap-6">
        <p className="max-w-[36.6875rem] text-[#C4C4C4]">
          {firstHalf}
          <br />
          <br />
          {secondHalf}
        </p>
        <div className="flex justify-start">
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
