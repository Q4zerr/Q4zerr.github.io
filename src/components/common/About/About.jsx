import "./About.css";
import TitleSection from "../TitleSection/TitleSection";
import AboutContent from "../../specific/AboutContent/AboutContent";
import AboutIllustration from "../../specific/AboutIllustration/AboutIllustration";
import { motion, useIsPresent } from "framer-motion";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const isPresent = useIsPresent();

  return (
    <section className="about" id="about">
      <TitleSection title="À Propos" headingType="h1" />
      <div className="about-container">
        <AboutContent />
        <AboutIllustration />
      </div>
      {location.pathname === "/a-propos" ? (
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

export default About;
