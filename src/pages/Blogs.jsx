import useScrollToTop from "../ScrollToTop";
import Blog from "../components/Blog/Blog";
const Blogs = () => {
  useScrollToTop()
  return (
    <section>
      <Blog />
    </section>
  );
};

export default Blogs;
