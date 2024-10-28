import React from "react";
import Muscle from "../../../public/Vector.svg";
import { Link } from "react-router-dom";

function Footer() {
  const navNames = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/stories" },
    { name: "Success Story", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="px-[5rem] py-[3rem] bg-[#242424] flex flex-col justify-between gap-6">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            TRANSFORM
          </span>
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            WITH TUNA
          </span>
        </div>
        <img src={Muscle} alt="Muscle" />
      </div>

      <div className="flex flex-col gap-2">
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
    </footer>
  );
}

export default Footer;
