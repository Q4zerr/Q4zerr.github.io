import PropTypes from "prop-types";
import "./ProjectDetails.css";

const ProjectDetails = ({ title, technologies, description, imageCover }) => {
  return (
    <>
      <div className="project-details-content">
        <span className="project-content-title">{title}</span>
        <div className="project-technos-container">
          <div className="project-content-technos">{technologies.join(" | ")}</div>
        </div>
        <div className="project-content-description">{description}</div>
      </div>
      <div className="project-details-cover">
        <img src={imageCover} alt="Desc IMAGE" />
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  imageCover: PropTypes.string.isRequired,
};

export default ProjectDetails;
