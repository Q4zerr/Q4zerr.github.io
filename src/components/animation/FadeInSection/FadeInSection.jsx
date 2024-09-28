import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

// Définir les animations
const fadeInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const FadeInSection = ({ children, className, thresholdNumber, additionalClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: thresholdNumber }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
      if (additionalClass) {
        ref.current.classList.add(additionalClass);
      }
    }
  }, [isVisible, controls]);

  return (
    <motion.div className={className} ref={ref} initial="hidden" animate={controls} variants={fadeInVariants} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  thresholdNumber: PropTypes.number,
  additionalClass: PropTypes.string,
};

export default FadeInSection;
