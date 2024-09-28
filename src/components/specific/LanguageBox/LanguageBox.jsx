import "./LanguageBox.css";
import PropTypes from "prop-types";

const LanguageBox = ({ icon, altText, title, className }) => {
  return (
    <div className={`language-box ${className}`}>
      <p className="language-title">{title}</p>
      <div className="language-icon">
        <img src={icon} alt={altText} />
      </div>
    </div>
  );
};

LanguageBox.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LanguageBox;
