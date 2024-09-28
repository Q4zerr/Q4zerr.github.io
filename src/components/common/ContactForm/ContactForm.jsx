import AboutSocialMedia from "../../specific/AboutSocialMedia/AboutSocialMedia";
import ContactDecoration from "../../specific/ContactDecoration/ContactDecoration";
import ContactMe from "../../specific/ContactMe/ContactMe";
import TitleSection from "../TitleSection/TitleSection";
import "./ContactForm.css";
import { motion, useIsPresent } from "framer-motion";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const isPresent = useIsPresent();

  return (
    <section className="contact">
      <TitleSection title="Contact" headingType="h5" />
      <div className="contact-container">
        <ContactMe />
        <div className="ct-deco">
          <ContactDecoration />
          <AboutSocialMedia />
        </div>
      </div>
      {location.pathname === "/contact" ? (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originY: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      ) : null}
    </section>
  );
};

export default ContactForm;
