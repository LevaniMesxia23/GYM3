import Star from "../../../public/star.svg";
import { useContext } from "react";
import { Mycontext } from "../../context/Context";
import { useFetchAbout } from "../../hooks/useFetchAbout"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomersInfo() {
  const { data, error, isLoading } = useFetchAbout();
  const { isTablet } = useContext(Mycontext);

  if (isLoading) {
    return (
      <div className="bg-gray h-[6.25rem] mt-[348px] flex px-10 justify-evenly gap-3">
        {isTablet && (
          <div className="flex items-center ">
            <Skeleton circle={true} height="2.77388rem" width="2.77388rem" />
          </div>
        )}
        <div className="flex items-center justify-center text-center">
          <Skeleton width="5rem" height="1.5rem" />
        </div>
        <div className="flex items-center justify-center text-center">
          <Skeleton width="10rem" height="1.5rem" />
        </div>
        <div className="flex items-center justify-center text-center">
          <Skeleton width="5rem" height="1.5rem" />
        </div>
        {isTablet && (
          <div className="flex items-center">
            <Skeleton circle={true} height="2.77388rem" width="2.77388rem" />
          </div>
        )}
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

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
