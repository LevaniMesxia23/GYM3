import AboutMe from "../components/about/AboutMe";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import StoryCarousel from "../components/SuccessStory/StoryCarousel";

const Home = () => {
  return (
    <section>
      <Header />
      <Slider />
      <div className="bg-[#121212]">
      <AboutMe />
      <StoryCarousel />
      </div>
    </section>
  );
};

export default Home;
