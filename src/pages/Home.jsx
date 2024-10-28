import AboutMe from "../components/about/AboutMe";
import { ContactUs } from "../components/Contact/ContactUs";
import MainHeader from "../components/Header/MainHeader/MainHeader";
import Slider from "../components/Slider/Slider";
import StoryCarousel from "../components/SuccessStory/StoryCarousel";

const Home = () => {
  return (
    <section>
      <MainHeader />
      <Slider />
      <div className="bg-[#121212]">
      <AboutMe />
      <StoryCarousel />
      <ContactUs />
      </div>
    </section>
  );
};

export default Home;
