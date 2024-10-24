import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="bg-black flex justify-between items-center px-[5.01rem] w-full relative pt-[3.13rem] overflow-hidden-x">
      <div className="flex flex-col items-center gap-1">
        <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.5rem] text-center">
          TRANSFORM
        </span>
        <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.5rem] text-center">
          WITH TUNA
        </span>
      </div>
      <Hamburger size={24} color="white" toggled={isOpen} toggle={toggleMenu} />

      <nav
        className={`absolute top-[126.08px] right-0 h-[100vh] bg-[#4D4D4D] p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[33.33%]`}
      >
        <ul className="flex flex-col gap-8">
          {navItems.map(({ name, path }) => {
            const isActive = location.pathname === path;

            return (
              <li
                key={name}
                className={`flex justify-center items-center gap-2 w-full h-[3rem] flex-shrink-0 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-[#D7FD44]' : 'bg-transparent'
                }`}
              >
                <Link to={path} className={`w-full text-white text-center font-Nunito text-[1rem] font-[700] leading-normal ${isActive && "text-black"}`}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
