import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import { MyProvider } from "./context/context";
import Layout from "./components/UI/Layout";
import AdminLayout from "./components/UI/AdminLayout";
import DashboardPage from "./pages/AdminPages/DashboardPage"
import AddBlogs from "./pages/AdminPages/AddBlogs";
import AdminServices from "./pages/AdminPages/AdminServices";

function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="services" element={<Services />} />
            <Route path="stories" element={<Stories />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="add-blogs" element={<AddBlogs />} />
            <Route path="about-me" element={<AddBlogs />} />
            <Route path="admin-services" element={<AdminServices />} />
          </Route>
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
