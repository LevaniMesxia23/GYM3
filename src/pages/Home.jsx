import AboutMe from "../components/about/AboutMe";
import { ContactUs } from "../components/Contact/ContactUs";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/Header/MainHeader/MainHeader";
import Slider from "../components/Slider/ServicesCarousel"
import StoryCarousel from "../components/SuccessStory/StoryCarousel";
import useScrollToTop from "../ScrollToTop";

const Home = () => {
  useScrollToTop()
  return (
    <section>
      <MainHeader />
      <div className="bg-[#121212]">
      <Slider />
      <div className="flex flex-col lg:justify-center lg:items-center">

        <AboutMe />
        <StoryCarousel />
        <div className="max-w-[1220px] flex items-center justify-start w-full">
        <ContactUs />
        </div>
      </div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
