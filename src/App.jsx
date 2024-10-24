import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./components/Header/Header"
import Contact from "./pages/Contact"
import Services from "./pages/Services";
import Stores from "./pages/Stores";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
