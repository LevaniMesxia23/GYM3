import { Twirl as Hamburger } from "hamburger-react";
import { Mycontext } from "../../context/Context";
import { useContext } from "react";
import Navigation from "./Navigation";
import Muscle from "../../../public/Vector.svg";

function IconAndNav() {
  const { isOpen, setIsOpen, isDesktop } = useContext(Mycontext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full pt-[2.5rem] overflow-hidden-x bg-[#121212] pb-10">
      <div className="bg-transparent flex justify-between items-center px-[2.5rem] relative z-10">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              TRANSFORM
            </span>
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              WITH TUNA
            </span>
          </div>
          {isDesktop && <img src={Muscle} alt="" />}
        </div>
        {!isDesktop && (
          <Hamburger
            size={24}
            color="white"
            toggled={isOpen}
            toggle={toggleMenu}
          />
        )}
      </div>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default IconAndNav;
