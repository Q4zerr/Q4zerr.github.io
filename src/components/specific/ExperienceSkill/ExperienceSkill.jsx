import "./ExperienceSkill.css";
import PropTypes from "prop-types";

const ExperienceSkill = ({ img, alt, text, gradient }) => {
  return (
    <div className="technology">
      <div className="technology-box">
        <img src={img} alt={alt} className="technology-img" />
      </div>
      <div className={gradient ? `technology-gradient ${gradient}` : "technology-gradient"}></div>
      <span className="technology-text">{text}</span>
    </div>
  );
};

ExperienceSkill.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
};

export default ExperienceSkill;
