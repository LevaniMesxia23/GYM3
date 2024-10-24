import Star from "../../../public/star.svg"
import { useContext } from "react";
import { Mycontext } from "../../context/context";

function CustomersInfo() {
  const {isTablet} = useContext(Mycontext)
  return (
    <div className="bg-[#D7FD44] h-[6.25rem] mt-[348px] flex px-10 justify-evenly gap-3">
      {isTablet && <div className="flex ">
        <img src={Star} className="w-[2.77388rem]" alt="" />
      </div>}
      <div className="flex items-center justify-center text-center ">
        <p>
          <b>200 + </b>Happy Customers
        </p>
      </div>
      <div className="flex items-center justify-center text-center ">
        <p><b>3+</b> Years Of Training Experience</p>
      </div>
      <div className="flex items-center justify-center text-center ">
        <p><b>98 %</b> Customer Satisfaction</p>
      </div>
      {isTablet && <div className="flex ">
        <img src={Star} className="w-[2.77388rem]" alt="" />
      </div>}
    </div>
  );
}

export default CustomersInfo;
