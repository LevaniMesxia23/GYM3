const BlogHeader = () => {
  return (
    <div className="flex flex-col items-center  gap-10 pt-10 ">
      <h1 className="text-[#C4C4C4] text-[40px] font-normal ">
        PRIVATE PERSONAL TRAINING
      </h1>
      <div className="flex gap-[32px] ">
        <span className="p-[10px] px-[25px] rounded-[24px] border text-[#D7FD44] border-[#D7FD44] ">
          Workout Routines
        </span>
        <span className="p-[10px]  px-[25px] rounded-[24px] border text-[#D7FD44] border-[#D7FD44] ">
          Nutrition and diet
        </span>
      </div>
      <div className="w-[90%] my-20  bg-[#121212] max-w-[1780px] ">
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/4d0b/9216/7e92783bbf1bdfd8b3fb7806dfe4d8a5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FiV34w8jUR7qPQt7jb6VRqSqhd14BRWpMyP7lUSfBcPSbvhp9jzTiiBA0pzZonnLYZfoyJj6yHY-0Xw7cSkVSwejJHXRle~ppavwFhNKKkTXrqLCPkNwRFzeiJIWEF5KGZZRGJDoXmTswPtNg5Y804dzGFDO-mdq9DrWCaw8vdROy2CA7rOx4sAI21cen05sklk--o1thJlR4Y16X8jxb2X654QKfDTHpSkX8~f-7n25ev2aNiCCE~hW5kGVeoYFqxSAEqFMCvoB1pT~09D9JTgOUIzw~By7vCEg3neHC4v3nbSOryZajICS3BbxVAgorg4eW~0TlRdkumX0vRZllw__"
          }
          className="w-full rounded-xl  max-h-[650px] object-cover"
        />
      </div>
    </div>
  );
};
export default BlogHeader;
