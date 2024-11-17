import React from "react";
import Muscle from "../../../public/Vector.svg";
import { Link } from "react-router-dom";
import Facebook from "/facebook.svg";
import Instagram from "/instagram.svg";
import Tiktok from "/tiktok.svg";
import Twitter from "/twitter.svg";
import { Mycontext } from "../../context/Context";
import { useContext } from "react";

function Footer() {
  const {isDesktop, isTablet} = useContext(Mycontext)
  const navNames = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/stories" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <footer className="px-[2.5rem] py-[3rem] bg-[#242424] flex flex-col md:flex-row lg:flex-row justify-between gap-6">
      <div className="flex gap-4 md:items-center lg:items-center">
        <div className="flex flex-col items-center gap-1">
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            TRANSFORM
          </span>
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            WITH TUNA
          </span>
        </div>
        {isDesktop && isTablet && <img src={Muscle} alt="Muscle" />}
      </div>

      <div className="md:flex md:flex-col md:justify-center md:gap-8 lg:flex lg:flex-col lg:justify-center lg:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:gap-8 mb-4 md:mb-0 lg:mb-0">
          {navNames.map((item, index) => (
            <ul key={index}>
              <Link to={item.path}>
                <li className="text-[#C4C4C4] text-[0.75rem]">{item.name}</li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="flex justify-center">
          <p className="text-[#C4C4C4] text-[0.625rem]">
            © 2024 Transform with Tuna. All rights reserved.
          </p>
        </div>
      </div>

      {(isDesktop || isTablet) && <div className=" flex flex-col gap-6">
        <img className="w-6 h-6" src={Facebook} alt="" />
        <img className="w-6 h-6" src={Instagram} alt="" />
        <img className="w-6 h-6" src={Tiktok} alt="" />
        <img className="w-6 h-6" src={Twitter} alt="" />
      </div>}
    </footer>
  );
}

export default Footer;
