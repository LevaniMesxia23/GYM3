import useScrollToTop from "../ScrollToTop";
import { ContactUs } from "../components/Contact/ContactUs";

const Contact = () => {
  useScrollToTop()
  return <section className="bg-[#121212] max-w-[1520px] flex items-center justify-start w-full"> 
    <ContactUs />
  </section>;
};

export default Contact;
