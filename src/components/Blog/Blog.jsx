import ServicesCarousel from "../Slider/ServicesCarousel";

import BlogHeader from "./BlogHeader";
import BlogAuthor from "./Blogauthor";
import BlogText from "./BlogText";
const Blog = () => {
  return (
    <section className="bg-[#121212] nunito ">
      <BlogHeader />
      <div className="flex flex-col w-[90%] items-start mx-auto md:flex-row lg:flex-row lg:gap-[12rem] gap-6">
        <BlogAuthor />
        <BlogText />
      </div>
      <div className=" pb-[8rem]">
      <ServicesCarousel />

      </div>
    </section>
  );
};
export default Blog;
