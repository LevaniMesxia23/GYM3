import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import { MyProvider } from "./context/context";
import Layout from "./components/UI/Layout";
import AdminLayout from "./components/UI/AdminLayout";
import AdminPanel from "./components/AdminPanel/AdminPanel";


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
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="admin" element={<AdminPanel />} />
          </Route>

        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
