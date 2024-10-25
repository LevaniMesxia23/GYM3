import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <section className="bg-black/95">
      <section className=" md:pl-12 lg:pl-16 text-white pl-6 pt-5 pb-5 ">
        <h3 className="text-[#C4C4C4] mb-3 ">
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
          <SwiperSlide className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px]      border border-[#4D4D4D]">
            <div className="flex  flex-col items-start p-5 group  ">
              <img
                className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                src="https://s3-alpha-sig.figma.com/img/bb14/4277/4d85bf191960582663c2a7662a216d9c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABJIQSHolj833xjDG9KSGGyErJzJ8NDRalZeixhodyrzHZCqJAfVZHLGyatuweHg2rIaxXcTOxa2yxT0EKmnSW34G0gLjRjC4qXLUn4~Ls2VLAij-CX5wU2pDOGcORchvbMNQbidQldsfODS5OWLCD4RUXMQP3xmE8mkz3TRX-5glvVs-f13wHjqEAM0EiFUXCkeZEN6NaPGO-gz8fVpeO8s6VJ0MMlUX6rN3D7EIPVLPajz5eYRVswuFI222zkpL92X0TMSifuon~Q-f26BXzoSV6LLwBgaXQQ4~itPH2GTbD8RksANBxI0LXEIWnC5zWTMc9iWUkNeq5bdy17EmQ__"
              />
              <span className="mt-3 font-bold py-[2px]  text-center">
                Weight Loss
              </span>
              <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                On-on-one sessions designed to fexus entirely on your individual
                fitness needs and goals
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px]      border border-[#4D4D4D]">
            <div className="flex  flex-col items-start p-5 group  ">
              <img
                className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                src="https://s3-alpha-sig.figma.com/img/f79e/5aa3/a6f6052c026cda2c197ab76e41f39b7d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QycAaIhr5i584cByAvFseEpmckw9I5ZsFfbnrP7-PNWb66swfdTRDEFQkmb~0Qh1-BiYd7rbpRq7WIsoIHWcKIhRaB7nj5RSfWnpRVCs7hKLSku7qTkuWaqS3WDEgs40gMCBBZ9jJoQHOdceRLostYx~e1TvXlUOk-AdMRrY34IX8dOoUo9QnK~F0vVilr8PRGTrsforl9Nu9UIisqYjeMmqV~QewzIvZ6vEuxouAMqv9qb7-F38XFSW3rnvmeZ7bqX64H7LngOrf6OV2CiKRBaxBSlBFNuDFk~TxTCmMkeq2FpLdgCz59FHK9DO80HDfphm9kcmumx5kaFFSzxxZA__"
              />
              <span className="mt-3 font-bold py-[2px]  text-center">
                Outdoor Running
              </span>
              <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                On-on-one sessions designed to fexus entirely on your individual
                fitness needs and goals
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px]     border border-[#4D4D4D]">
            <div className="flex  flex-col items-start p-5 group  ">
              <img
                className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                src="https://s3-alpha-sig.figma.com/img/84f9/bbc0/89a595ff31a880ee3343aa4637b55fdd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cj0~XtiQa55NK8PFbP5xlz~gU3jnRLPgrkiB96ItB0e4qLxt7j4cKm2f5Z5AQCHllA~2OrKowD8pjFq7JPsU91sXEbnQ3bO1mB~EBOazZbcD-nZ1ablPXZ2t42HImODTOiFrfrTXCMieJB1knBOuRF0NtiR53cQ~qtcDgc0M8qDP4HV1watVmI6PA4OpzsBkaGXbfZU1FGdNu5obcYhYTiRC1OnBmjpCHAFWJ5gQP-9VR7tF~5VAgi3CdFP-RTxqw2HtSGF7xHHZz1cOdwHJuDpWLbxYAAgHV0eQ7R7XlOy8vRB0mmeeF1kfPd8H9C6c4GvIpMyypT3RfYsvZoIyYg__"
              />
              <span className="mt-3 font-bold py-[2px]  text-center">
                Nutrition and Meal Plans
              </span>
              <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                On-on-one sessions designed to fexus entirely on your individual
                fitness needs and goals
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cursor-pointer rounded-2xl max-w-[305px]      border border-[#4D4D4D]">
            <div className="flex  flex-col items-start p-5 group  ">
              <img
                className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                src="https://s3-alpha-sig.figma.com/img/b276/2042/b6a7df3192550c2d2e0550c3bc79ccef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFNx5bnpmQn3JRv55cHlB~qrGADgKFBtXGJRgvDKh15qeW9cooElZ-75WSSayVCemK3t9cke1O629i0iDbVS9hS818zPrWOjw5BH4zh~3C6Ie2CfuxRa7yiD4ftn0LxqdB4uNE1jJ81lcghPFlw~sHiiQNK2mdI3~N0svqvGFCp1qjawvdyFtTpVkOhHU-EE~n2gbfq0~TC1FK1dnT8xlMAyj8oSoy~4JCDEc5YN~LpIgqkl8BAhv9IrE9xE-vr2BS7k0sMaJUudV-Bz64L~wsctbFPGRFDV-8PF3i7GinUu81nAtc5GPNoaYXxiG-MeUxTx9ylZ1NolUr8cRJLepQ__"
              />
              <span className="mt-3 font-bold py-[2px]  text-center">
                Online Personal Training
              </span>
              <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                On-on-one sessions designed to fexus entirely on your individual
                fitness needs and goals
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cursor-pointer rounded-2xl max-w-[305px]      border border-[#4D4D4D]">
            <div className="flex  flex-col items-start p-5 group  ">
              <img
                className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                src="https://s3-alpha-sig.figma.com/img/bb14/4277/4d85bf191960582663c2a7662a216d9c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABJIQSHolj833xjDG9KSGGyErJzJ8NDRalZeixhodyrzHZCqJAfVZHLGyatuweHg2rIaxXcTOxa2yxT0EKmnSW34G0gLjRjC4qXLUn4~Ls2VLAij-CX5wU2pDOGcORchvbMNQbidQldsfODS5OWLCD4RUXMQP3xmE8mkz3TRX-5glvVs-f13wHjqEAM0EiFUXCkeZEN6NaPGO-gz8fVpeO8s6VJ0MMlUX6rN3D7EIPVLPajz5eYRVswuFI222zkpL92X0TMSifuon~Q-f26BXzoSV6LLwBgaXQQ4~itPH2GTbD8RksANBxI0LXEIWnC5zWTMc9iWUkNeq5bdy17EmQ__"
              />
              <span className="mt-3 font-bold py-[2px]  text-center">
                Weight Loss
              </span>
              <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                On-on-one sessions designed to fexus entirely on your individual
                fitness needs and goals
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Slider;
