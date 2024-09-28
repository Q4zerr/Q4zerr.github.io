import "./ExperienceCase.css";
import ParallaxContainer from "../../common/ParallaxContainer/ParallaxContainer";
import PropTypes from "prop-types";
import ExperienceSkill from "../ExperienceSkill/ExperienceSkill";

const ExperienceCase = ({ title, technologies }) => {
  const configExperienceTitle = [{ translateXMultiplier: 15, translateYMultiplier: 15, rotateMultiplier: 2, scale: 1 }];
  return (
    <div className="experience-case">
      <ParallaxContainer config={configExperienceTitle}>
        <div>
          <span className="exp-case-title">{title}</span>
        </div>
      </ParallaxContainer>
      {/* Si pas vide on affiche les technos */}
      {technologies.length > 0 && (
        <div className="technologies">
          {technologies.map((technology, key) => (
            <ExperienceSkill key={key} img={technology.img} alt={technology.alt} text={technology.text} gradient={technology.gradient} />
          ))}
        </div>
      )}
      <div className="exp-case-line"></div>
    </div>
  );
};

ExperienceCase.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      gradient: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceCase;
