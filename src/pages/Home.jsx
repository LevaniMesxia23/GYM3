import AboutMe from "../components/about/AboutMe";
import { ContactUs } from "../components/Contact/ContactUs";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import MainHeader from "../components/Header/MainHeader/MainHeader";
import Slider from "../components/Slider/ServicesCarousel"
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
        <Footer />
      </div>
    </section>
  );
};

export default Home;
