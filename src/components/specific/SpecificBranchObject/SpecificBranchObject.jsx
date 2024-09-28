import "./SpecificBranchObject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SpecificBranchObject = ({ name, city, school, date }) => {
  return (
    <div className="object">
      <span className="object-title">{name}</span>
      <span className="object-subtitle">
        {city}
        {school ? ` - ${school}` : ""}
      </span>
      <div className="object-calendar">
        <FontAwesomeIcon icon={faCalendar} />
        {date}
      </div>
    </div>
  );
};

SpecificBranchObject.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  school: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default SpecificBranchObject;
