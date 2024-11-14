import { Twirl as Hamburger } from "hamburger-react";
import mainImage from "../../../../public/mainImage.jpeg";
import BackgroundImage from "../BackgroundImage";
import CustomersInfo from "../CustomersInfo";
import { Mycontext } from "../../../context/Context";
import { useContext } from "react";
import Navigation from "../Navigation";
import Muscle from "../../../../public/Vector.svg";
import MainNavigation from "./MainNavigation";

function MainHeader() {
  const { isOpen, setIsOpen, isDesktop } = useContext(Mycontext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full pt-[2.5rem] overflow-hidden-x">
      <BackgroundImage imageUrl={mainImage} height="28.27756rem" />
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
      <MainNavigation setIsOpen={setIsOpen} />
      <CustomersInfo />
    </div>
  );
}

export default MainHeader;
