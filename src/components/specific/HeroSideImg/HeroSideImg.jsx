import "./HeroSideImg.css";
import LogoXBig from "../../../assets/images/logo_xbig_white.png";
import { useEffect, useRef } from "react";

const HeroSideImg = () => {
  // Utilisation de useRef pour stocker la position courante
  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const smoothingFactor = 0.1;

  useEffect(() => {
    const rotateMultiplier = 2;
    const translateXMultiplier = 200;
    const translateYMultiplier = 140;

    const applyTransform = (element, x, y, scale = 1, xMultiplier = 1, yMultiplier = 1) => {
      element.style.transform = `
        translateX(${x * (translateXMultiplier * xMultiplier)}px)
        translateY(${y * (translateYMultiplier * yMultiplier)}px)
        rotateX(${y * (rotateMultiplier * yMultiplier)}deg)
        rotateY(${x * (rotateMultiplier * xMultiplier)}deg)
        rotateZ(0deg)
        scale(${scale})`;
    };

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

      // Sélection de toutes les images
      const images = document.querySelectorAll(".hero-primary-logo, .f1, .f2, .f3, .f4");

      // Appliquer les transformations sur les images avec des multiplicateurs ajustés
      applyTransform(images[0], currentX.current, currentY.current, 1, 1, 1);
      applyTransform(images[1], currentX.current, currentY.current, 0.93, 0.8, 0.7);
      applyTransform(images[2], currentX.current, currentY.current, 0.85, 0.6, 0.5);
      applyTransform(images[3], currentX.current, currentY.current, 0.8, 0.4, 0.3);
      applyTransform(images[4], currentX.current, currentY.current, 0.75, 0.2, 0.1);

      // Requête d'une nouvelle frame d'animation
      requestAnimationFrame(updatePosition);
    };

    // Initialiser l'animation
    requestAnimationFrame(updatePosition);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-side-img">
      <div className="hero-side-parallax">
        <img src={LogoXBig} className="hero-primary-logo" alt="Logo White XBig" />
        <img src={LogoXBig} className="hero-light-logo f1" alt="Logo White XBig" />
        <img src={LogoXBig} className="hero-light-logo f2" alt="Logo White XBig" />
        <img src={LogoXBig} className="hero-light-logo f3" alt="Logo White XBig" />
        <img src={LogoXBig} className="hero-light-logo f4" alt="Logo White XBig" />
      </div>
    </div>
  );
};

export default HeroSideImg;
