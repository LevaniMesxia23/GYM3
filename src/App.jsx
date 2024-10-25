import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import { MyProvider } from "./context/context";
import Layout from "./components/UI/Layout";
function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
