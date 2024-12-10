import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import { MyProvider } from "./context/Context";
import Layout from "./components/UI/Layout";
import AdminLayout from "./components/UI/AdminLayout";
import AddBlogs from "./pages/AdminPages/AddBlogs";
import AdminServices from "./pages/AdminPages/AdminServicesPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ServicesModal from "./components/AdminPanel/AdminServices/ServicesModal";
import AboutMe from "./pages/AdminPages/AboutMe";
import React from "react";

function App() {
  function NotFoundRedirect() {
    React.useEffect(() => {
      window.history.back();
    }, []);
  }
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="modal" element={<ServicesModal />} />
          <Route element={<Layout />}>
            <Route path="services" element={<Services />} />
            <Route path="stories" element={<Stories />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          <Route path="admin/login" element={<AdminPanel />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AboutMe />} />
            <Route path="blogs" element={<AddBlogs />} />
            <Route path="stories" element={<AboutMe />} />
            <Route path="admin-services" element={<AdminServices />} />
          </Route>

          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
