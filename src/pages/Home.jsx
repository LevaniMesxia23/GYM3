import AboutMe from "../components/about/AboutMe";
import { ContactUs } from "../components/Contact/ContactUs";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/ServicesCarousel"
import StoryCarousel from "../components/SuccessStory/StoryCarousel";

const Home = () => {
  return (
    <section>
      <Header />
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
