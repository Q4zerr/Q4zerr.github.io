import "./ProjectButton.css";
import PropTypes from "prop-types";

const ProjectButton = ({ link, text }) => {
  return (
    <a href={link} className="project-button-website" target="_blank">
      {text}
    </a>
  );
};

ProjectButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectButton;
