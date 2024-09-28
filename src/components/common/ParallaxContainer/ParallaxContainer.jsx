import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ParallaxContainer = ({ children, config }) => {
  const containerRef = useRef(null);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const smoothingFactor = 0.1;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Positions cibles basées sur la position de la souris
      targetX.current = clientX / innerWidth - 0.5;
      targetY.current = clientY / innerHeight - 0.5;
    };

    const updatePosition = () => {
      // Interpolation linéaire pour lisser les mouvements
      currentX.current += (targetX.current - currentX.current) * smoothingFactor;
      currentY.current += (targetY.current - currentY.current) * smoothingFactor;

      // Appliquer l'effet parallax à chaque enfant
      Array.from(containerRef.current.children).forEach((child, index) => {
        const { translateXMultiplier = 100, translateYMultiplier = 50, rotateMultiplier = 2, scale = 1 } = config[index] || config[config.length - 1];

        child.style.transform = `
          translateX(${currentX.current * translateXMultiplier}px)
          translateY(${currentY.current * translateYMultiplier}px)
          rotateX(${currentY.current * rotateMultiplier}deg)
          rotateY(${currentX.current * rotateMultiplier}deg)
          scale(${scale})
        `;
      });

      requestAnimationFrame(updatePosition);
    };

    // Initialiser l'animation
    requestAnimationFrame(updatePosition);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [config]);

  return (
    <div className="parallax-container" ref={containerRef}>
      {children}
    </div>
  );
};

// Validation des props avec PropTypes
ParallaxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      translateXMultiplier: PropTypes.number,
      translateYMultiplier: PropTypes.number,
      rotateMultiplier: PropTypes.number,
      scale: PropTypes.number,
    })
  ).isRequired,
};

export default ParallaxContainer;
