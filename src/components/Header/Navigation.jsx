import { useLocation, Link } from "react-router-dom";
import { Mycontext } from "../../context/context";
import { useContext } from "react";


function Navigation({ isOpen, setIsOpen }) {
  const { isDesktop } = useContext(Mycontext);
  const location = useLocation();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <div>
      {!isDesktop && (
        <nav
          className={`absolute top-0 left-0 right-0 bg-[#121212] px-10 py-14 transform transition-all duration-300 ease-in-out ${
            isOpen ? "slide-in" : "slide-out"
          }`}
        >
          <ul className="flex flex-col gap-4 pt-[100px]">
            {navItems.map(({ name, path }) => {
              const isActive = location.pathname === path;

              return (
                <li
                  key={name}
                  className={`flex justify-center items-center gap-2 w-full h-[3rem] flex-shrink-0 rounded-lg transition-colors duration-300 ${
                    isActive ? "bg-[#D7FD44]" : "bg-transparent"
                  }`}
                >
                  <Link
                    to={path}
                    onClick={handleNavClick}
                    className={`w-full text-center font-Nunito text-[1rem] font-[700] leading-normal ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {isDesktop && (
        <ul className="absolute top-[38px] right-12 text-red-500 flex gap-4 bg-[#222] py-[0.62rem] rounded-[12.5rem] px-5 border-[#4D4D4D] z-10">
          {navItems.map(({ name, path }) => {
            const isActive = location.pathname === path;

            return (
              <li
                key={name}
                className={`flex justify-center items-center gap-2 h-[3rem] px-4 transition-colors duration-300 rounded-[2.875rem] ${
                  isActive ? "bg-[#D7FD44]" : "bg-transparent"
                }`}
              >
                <Link
                  to={path}
                  onClick={handleNavClick}
                  className={`font-Nunito text-[1rem] font-[700] leading-normal ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navigation;
