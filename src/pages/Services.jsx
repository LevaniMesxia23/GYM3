import useScrollToTop from "../ScrollToTop";
import Prices from "../components/Prices/Prices";
import Slider from "../components/Slider/ServicesCarousel";

const Services = () => {
  useScrollToTop()
  return (
    <section className="bg-[#121212]">
      <Slider />
      <Prices />
    </section>
  );
};

export default Services;
