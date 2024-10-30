import ServicesCarousel from "../Slider/ServicesCarousel";

import BlogHeader from "./BlogHeader";
import BlogAuthor from "./Blogauthor";
import BlogText from "./BlogText";
const Blog = () => {
  return (
    <section className="bg-[#121212] nunito ">
      <BlogHeader />
      <div className="flex w-[90%] items-start mx-auto gap-[12rem]">
        <BlogAuthor />
        <BlogText />
      </div>
      <ServicesCarousel />
    </section>
  );
};
export default Blog;
