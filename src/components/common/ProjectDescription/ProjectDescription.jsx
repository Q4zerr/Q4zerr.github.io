import "./ProjectDescription.css";
import PropTypes from "prop-types";

const ProjectDescription = ({ client, year, role, technologies }) => {
  return (
    <div className="project-details-details">
      <div className="project-details-item">
        <span className="project-details-title">Client</span>
        <p className="project-details-data">{client}</p>
      </div>
      <div className="project-details-item">
        <span className="project-details-title">Date</span>
        <p className="project-details-data">{year}</p>
      </div>
      <div className="project-details-item">
        <span className="project-details-title">Rôle</span>
        <p className="project-details-data">{role}</p>
      </div>
      <div className="project-details-item">
        <span className="project-details-title">Technologies</span>
        <ul className="project-details-list-stack">
          {technologies.map((technologie, key) => (
            <li className="project-details-stack" key={key}>
              {technologie}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectDescription.propTypes = {
  client: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default ProjectDescription;
