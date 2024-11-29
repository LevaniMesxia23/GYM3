import { useFetchBlogs } from "../../hooks/useFetchBlogs";

const BlogText = () => {
  const { data, isLoading, isError, error } = useFetchBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  var blogs = data.blogs;

  console.log(blogs.map((item) => item.author));
  return (
    <div>
      {blogs?.map(function blogsMap(blog) {
        return (
          <div key={blog.id} className="border-b border-b-[#737373] pb-6 mb-6">
            <div className=" flex items-center gap-4 ">
              <p className="text-[#D7FD44]  text-[1rem] leading-[24px]">
                {blog.author}
              </p>
              <img src={blog.image} className="w-8 h-8 rounded-[50%]" alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold py-5 text-white">
                {blog.title}
              </h1>
            </div>
            <p className="leading-[24px] text-white">{blog.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogText;
