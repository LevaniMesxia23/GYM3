import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Stores from "./components/pages/Stores";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/services" element={Services} />
        <Route path="/stores" element={Stores} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </>
  );
}

export default App;
