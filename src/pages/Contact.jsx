import useScrollToTop from "../ScrollToTop";
import { ContactUs } from "../components/Contact/ContactUs";

const Contact = () => {
  useScrollToTop()
  return <section className="bg-[#121212]">
    <ContactUs />
  </section>;
};

export default Contact;
