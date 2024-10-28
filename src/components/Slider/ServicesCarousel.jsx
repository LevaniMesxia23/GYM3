import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useServices } from "../../hooks/useServices";

const ServicesCarousel = () => {
  const { data } = useServices();
  const services = data?.data;
  console.log(services);
  return (
    <section className="bg-[#121212]">
      <button>fetch</button>
      <section className=" md:pl-12 lg:pl-16 text-white pl-6 pt-5 pb-5 ">
        <h3 className="text-[#C4C4C4] mb-5 text-center lg:text-left text-md ">
          YOUR FITNESS JOURNEY STARTS HERE
        </h3>
        <Swiper
          breakpoints={{
            768: {
              // md: 768px and up
              slidesPerView: 2,
            },
            1024: {
              // lg: 1024px and up
              slidesPerView: 3,
            },
          }}
          spaceBetween={15}
          slidesPerView={1}
        >
          {services?.map((services) => (
            <SwiperSlide
              key={services.id}
              className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px]      border border-[#4D4D4D]"
            >
              <div className="flex  flex-col items-start p-5 group  ">
                <img
                  className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                  src={services.image}
                />
                <span className="mt-3 font-bold py-[2px]  text-center">
                  {services.name}
                </span>
                <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                  {services.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default ServicesCarousel;
