import testimg from "../../../public/mainImage.jpeg";
const BlogAuthor = () => {
  return (
    <div className="text-white min-w-[140px]">
      <span className="text-white text-sm">Contributor</span>
      <div className="flex gap-3 border-b border-b-[#C4C4C4] pt-4 pb-2">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full"
          src={testimg}
        />
        <div className="flex flex-col text-sm">
          <span>Tuna</span>
          <span className="text-[10px] font-light w-[100px] text-[#C4C4C4]  ">
            1 Month ago
          </span>
        </div>
      </div>
      <div className="mt-2 text-[#C4C4C4] font-light text-sm">
        <span className="text-[12px]">Reading time</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
