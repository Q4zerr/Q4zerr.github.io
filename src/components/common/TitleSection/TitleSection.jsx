import "./TitleSection.css";
import PropTypes from "prop-types";

const TitleSection = ({ title, headingType }) => {
  const HeadingTag = headingType;

  return (
    <div className="title-canvas">
      <HeadingTag className="section-title">{title}</HeadingTag>
      <span className="section-title-shadow n1">{title}</span>
      <span className="section-title-shadow n2">{title}</span>
      <span className="section-title-shadow n3">{title}</span>
      <span className="section-title-shadow n4">{title}</span>
    </div>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  headingType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
};

export default TitleSection;
