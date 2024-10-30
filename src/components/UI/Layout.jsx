import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/footer"; 

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen"> 
      {!isHomePage && <Header />}
      <main className="flex-grow"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
