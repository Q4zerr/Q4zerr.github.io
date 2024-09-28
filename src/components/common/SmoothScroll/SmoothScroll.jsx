import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

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

const Scroll = () => {
  useEffect(() => {
    // Vérification de la largeur de l'écran
    const isMobileOrTablet = window.innerWidth <= 1024;

    if (!isMobileOrTablet) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Scrollbar.use(OverscrollPlugin);
      // Initialisation du smooth-scrollbar
      const scrollbar = Scrollbar.init(document.querySelector("body"), options);

      // Désactiver la restauration automatique de la position de défilement par le navigateur
      window.history.scrollRestoration = "manual";

      // Réinitialiser la position de défilement en haut de la page lors du rechargement
      const handleLoad = () => {
        scrollbar.setPosition(0, 0);
      };

      window.addEventListener("load", handleLoad);

      // Nettoyage lors du démontage du composant
      return () => {
        window.removeEventListener("load", handleLoad);
        scrollbar.destroy();
      };
    }
  }, []);

  return null;
};

export default Scroll;
