import { useGetExperience } from "../../hooks/useExperience";
import arrows from "../../../public/threeArrow.svg";
import star from "../../../public/star11.svg";
import star5 from "../../../public/star5.svg";
import { useCertification } from "../../hooks/useCertification";
import About from "./About";
const Certification = () => {
  const { data } = useGetExperience();
  const { data: certifications } = useCertification();
  const story = data?.about[0]?.story;
  const exp = data?.about[0].experience;
  const certification = certifications?.data;
  console.log(certification);

  return (
    <section className="bg-[#121212]">
      <div className="flex flex-col mr-[60%] py-4 pt-12 font-bold items-center gap-1">
        <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
          TRANSFORM
        </span>
        <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
          WITH TUNA
        </span>
      </div>
      <div className=" object-cover md:w-[80%]  my-20   mx-auto ">
        <img
          className="rounded-lg mx-auto w-[95%] md:w-[100%] "
          src="https://s3-alpha-sig.figma.com/img/f79e/5aa3/a6f6052c026cda2c197ab76e41f39b7d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QycAaIhr5i584cByAvFseEpmckw9I5ZsFfbnrP7-PNWb66swfdTRDEFQkmb~0Qh1-BiYd7rbpRq7WIsoIHWcKIhRaB7nj5RSfWnpRVCs7hKLSku7qTkuWaqS3WDEgs40gMCBBZ9jJoQHOdceRLostYx~e1TvXlUOk-AdMRrY34IX8dOoUo9QnK~F0vVilr8PRGTrsforl9Nu9UIisqYjeMmqV~QewzIvZ6vEuxouAMqv9qb7-F38XFSW3rnvmeZ7bqX64H7LngOrf6OV2CiKRBaxBSlBFNuDFk~TxTCmMkeq2FpLdgCz59FHK9DO80HDfphm9kcmumx5kaFFSzxxZA__"
        />
      </div>
      <div className="flex flex-col  items-center justify-center mx-auto w-[80%]">
        <About arrows={arrows} story={story} star={star} exp={exp} />
        <div className="flex flex-col  pt-14  gap-10 bg-[#121212]">
          <div className="flex gap-3 items-center">
            <img src={arrows} className="w-[80px]" />
            <h3
              style={{
                background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className=" text-[16px] font-bold"
            >
              Certifications
            </h3>
          </div>
          <div className="text-white lg:grid-cols-3 md:grid md::grid-cols-2 bg-[#121212] flex flex-col gap-3 ">
            {certification?.map((certification, i) => (
              <span
                key={i}
                className="flex text-[#FFFFFF] leading-[21.8px] items-center text-[14px] gap-2"
              >
                <img src={star5} />
                {certification.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
