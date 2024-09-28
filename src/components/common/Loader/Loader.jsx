import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Loader.css";
import LogoT from "../../../assets/images/loader/logo_loader.png";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // On définit un timeout de 6 secondes
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    // Fonction pour enlever le loader après le chargement de la page
    const handleLoad = () => {
      clearTimeout(minLoadingTime);
      setTimeout(() => {
        setIsLoading(false);
        // 2s après on met la classe au body pour permettre le scroll
        setTimeout(() => {
          document.body.classList.add("loaded");
        }, 2000);
      }, 6000 - (performance.now() % 6000));
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return location.pathname === "/" ? (
    <section className={`loader${isLoading ? "" : " disabled"}`}>
      <div className="loader-container">
        <img src={LogoT} alt="Logo Tanguy AVET" className="logo_loader" />
        <svg width="273" height="53" viewBox="0 0 273 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 14.327C1 14.327 82.7038 2 136 2C189.296 2 271 14.327 271 14.327C140.028 6.40175 81.0176 12.8554 11 51C99.1874 11.356 216 25.7296 241.5 33.1258C267 40.522 271 45.1447 271 45.1447"
            stroke="white"
            strokeWidth="3"
            className="svg-elem-1"
          ></path>
        </svg>
      </div>
    </section>
  ) : null;
};

export default Loader;
