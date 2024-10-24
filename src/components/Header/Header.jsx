import { Twirl as Hamburger } from 'hamburger-react';
import { useLocation, Link } from 'react-router-dom';
import mainImage from "../../../public/mainImage.jpeg";
import BackgroundImage from './BackgroundImage';
import CustomersInfo from './CustomersInfo';

import { Mycontext } from '../../context/context';
import { useContext } from 'react';


function Header() {
  const {isOpen,setIsOpen} = useContext(Mycontext)

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="relative w-full pt-[2.5rem] overflow-hidden-x">
      <BackgroundImage imageUrl={mainImage} height="28.27756rem" />
      <div className="bg-transparent flex justify-between items-center px-[2.5rem] relative z-10">
        <div className="flex flex-col items-center gap-1">
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            TRANSFORM
          </span>
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            WITH TUNA
          </span>
        </div>
        <Hamburger size={24} color="white" toggled={isOpen} toggle={toggleMenu} />

        <nav
          className={`absolute top-[60px] left-0 right-0 bg-[black] px-10 py-14 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-20px]'
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map(({ name, path }) => {
              const isActive = location.pathname === path;

              return (
                <li
                  key={name}
                  className={`flex justify-center items-center gap-2 w-full h-[3rem] flex-shrink-0 rounded-lg transition-colors duration-300 ${
                    isActive ? 'bg-[#D7FD44]' : 'bg-transparent'
                  }`}
                >
                  <Link
                    to={path}
                    className={`w-full text-center font-Nunito text-[1rem] font-[700] leading-normal ${
                      isActive ? 'text-black' : 'text-white' 
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <CustomersInfo />
    </div>
  );
}

export default Header;
