import "./Home.css";
import Hero from "../../components/common/Hero/Hero";
import About from "../../components/common/About/About";
import Journey from "../../components/common/Journey/Journey";
import Creation from "../../components/common/Creation/Creation";
import Experience from "../../components/common/Experience/Experience";
import ContactForm from "../../components/common/ContactForm/ContactForm";
import Citation from "../../components/common/Citation/Citation";
import Certification from "../../components/common/Certification/Certification";
import { motion, useIsPresent } from "framer-motion";

const Home = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Creation />
      <Citation />
      <Experience />
      <Certification />
      <ContactForm />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};

export default Home;
