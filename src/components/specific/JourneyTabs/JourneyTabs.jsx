import "./JourneyTabs.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const JourneyTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="journey-tabs">
      <div className={`journey-tabs-button ${activeTab === "graduation" ? "active" : ""}`} onClick={() => onTabChange("graduation")}>
        <FontAwesomeIcon icon={faGraduationCap} className="graduation" />
        <span className="button-label">Études</span>
      </div>
      <div className={`journey-tabs-button ${activeTab === "work" ? "active" : ""}`} onClick={() => onTabChange("work")}>
        <FontAwesomeIcon icon={faBriefcase} className="work" />
        <span className="button-label">Travail</span>
      </div>
    </div>
  );
};

JourneyTabs.propTypes = {
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default JourneyTabs;
