import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Header/Header";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import { MyProvider } from "./context/context";
import Layout from "./components/UI/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
