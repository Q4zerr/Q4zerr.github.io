import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import CreationDetails from "../../specific/CreationDetails/CreationDetails";
import About from "../About/About";
import Creation from "../Creation/Creation";
import Experience from "../Experience/Experience";
import ContactForm from "../ContactForm/ContactForm";
import { AnimatePresence } from "framer-motion";
import Scrollbar from "smooth-scrollbar";
import article_cybria from "../../../articles/article_cybria";
import article_gsmedia from "../../../articles/article_gsmedia";

const AnimatedRoutes = () => {
  const location = useLocation();

  var overscrollOptions = {
    enable: true,
    effect: "glow",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#8d6eb5",
  };

  var options = {
    damping: 0.07,
    plugins: {
      overscroll: { ...overscrollOptions },
    },
  };

  const scrollbar = Scrollbar.init(document.querySelector("body"), options);

  return (
    <AnimatePresence
      mode="wait"
      initial="false"
      onExitComplete={() => {
        scrollbar.destroy();
        setTimeout(() => {
          Scrollbar.init(document.querySelector("body"), options);
        }, 0);
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/cybria" element={<CreationDetails article={article_cybria} />} />
        <Route path="/projects/gsmedia" element={<CreationDetails article={article_gsmedia} />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/creations" element={<Creation />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
