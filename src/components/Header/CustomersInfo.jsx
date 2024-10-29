import Star from "../../../public/star.svg";
import { useContext } from "react";
import { Mycontext } from "../../context/context";
import { useGetExperience } from "../../hooks/useExperience";
import ClockLoader from "react-spinners/ClockLoader";

function CustomersInfo() {
  const { data, error, isLoading } = useGetExperience();
  const { isTablet } = useContext(Mycontext);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[6.25rem]">
        <ClockLoader color="#D7FD44" size={80} />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  console.log(data.about[0]);

  return (
    <div className="bg-[#D7FD44] h-[6.25rem] mt-[348px] flex px-10 justify-evenly gap-3">
      {isTablet && (
        <div className="flex ">
          <img src={Star} className="w-[2.77388rem]" alt="" />
        </div>
      )}
      <div className="flex items-center justify-center text-center ">
        <p>
          <b>200 + </b>Happy Customers
        </p>
      </div>
      <div className="flex items-center justify-center text-center ">
        {data.about[0].experience}
      </div>
      <div className="flex items-center justify-center text-center ">
        <p>
          <b>98 %</b> Customer Satisfaction
        </p>
      </div>
      {isTablet && (
        <div className="flex ">
          <img src={Star} className="w-[2.77388rem]" alt="" />
        </div>
      )}
    </div>
  );
}

export default CustomersInfo;
