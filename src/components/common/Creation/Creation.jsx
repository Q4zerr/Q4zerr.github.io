import "./Creation.css";
import TitleSection from "../TitleSection/TitleSection";
import CreationSeparation from "../../specific/CreationSeparation/CreationSeparation";
import CreationList from "../../specific/CreationList/CreationList";
import CybriaImg from "../../../assets/images/creation/cybria/cybria.png";
import GSMediaImg from "../../../assets/images/creation/gsmedia/gsmedia.png";
import { motion, useIsPresent } from "framer-motion";
import { useLocation } from "react-router-dom";

const Creation = () => {
  const location = useLocation();
  const isPresent = useIsPresent();

  const selectedCreations = [
    {
      creationLink: "/projects/cybria",
      creationName: "Cybria",
      creationTechno: "React JS | React Native | Laravel | PostgreSQL",
      creationImage: CybriaImg,
      creationImageAlt: "Cybria image accueil",
    },
    {
      creationLink: "/projects/gsmedia",
      creationName: "GS Media",
      creationTechno: "HTML5 | CSS3 | JavaScript",
      creationImage: GSMediaImg,
      creationImageAlt: "GSMedia image accueil",
    },
  ];

  return (
    <section className="creations">
      <TitleSection title="Créations" headingType="h3" />
      <div className="creations-container">
        <CreationSeparation description="Projets<br/>annexes et<br/>personnels" firstWord="PROJETS" secondWord="FAVORIS" />
        <CreationList creation={selectedCreations} />
      </div>
      {location.pathname === "/creations" ? (
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

export default Creation;
