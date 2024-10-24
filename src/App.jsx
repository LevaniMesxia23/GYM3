import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Header/Header";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Stores from "./pages/Stores";
import { MyProvider } from "./context/context";
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
