import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const backgroundContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = backgroundContainerRef.current;
    const numGradients = Math.floor(Math.random() * (12 - 7)) + 7;
    const gradients = [];

    // Création des éléments de gradient
    for (let i = 0; i < numGradients; i++) {
      const gradient = document.createElement("div");
      gradient.className = "gradient";
      gradient.style.width = `${Math.random() * 100 + 50}px`; // Random width
      gradient.style.height = `${Math.random() * 100 + 50}px`; // Random height
      gradients.push(gradient);
      container.appendChild(gradient);
    }

    // Fonction pour déplacer les gradients
    const moveGradients = () => {
      gradients.forEach((gradient) => {
        const newX = Math.random() * (container.clientWidth - gradient.clientWidth);
        const newY = Math.random() * (container.clientHeight - gradient.clientHeight);
        gradient.style.transform = `translate(${newX}px, ${newY}px)`;
      });
    };

    // Initialiser le mouvement des gradients
    moveGradients();
    intervalRef.current = setInterval(moveGradients, 10000);

    // Nettoyage à la démonstration
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Nettoyer les gradients à la destruction du composant
      gradients.forEach((gradient) => container.removeChild(gradient));
    };
  }, []);

  return (
    <div className="animated-background">
      <div className="background-container" ref={backgroundContainerRef}></div>
    </div>
  );
};

export default AnimatedBackground;
