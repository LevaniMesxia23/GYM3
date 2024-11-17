import useScrollToTop from "../ScrollToTop";
import Certification from "../components/Certification/Certification";
import Navigation from "../components/Header/Navigation";
const Stores = () => {
  useScrollToTop()
  return (
    <section className="bg-[#121212] min-h-screen">
      <Navigation />
      <Certification />
    </section>
  );
};

export default Stores;
