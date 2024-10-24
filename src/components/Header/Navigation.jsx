import { useLocation, Link } from 'react-router-dom';
import { Mycontext } from '../../context/context';
import { useContext } from 'react';

function Navigation() {
  const {isOpen} = useContext(Mycontext)
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <div>
      <nav
          className={`absolute top-0 left-0 right-0 bg-[black] px-10 py-14 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-20px]'
          }`}
        >
          <ul className="flex flex-col gap-4 pt-[100px]">
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
  )
}

export default Navigation