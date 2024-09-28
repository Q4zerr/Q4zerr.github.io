import CreationItem from "../CreationItem/CreationItem";
import "./CreationList.css";
import PropTypes from "prop-types";

const CreationList = ({ creation }) => {
  return (
    <div className="creations-list-container">
      <ul className="creations-list">
        {creation.map((item, index) => (
          <CreationItem
            key={index}
            creationLink={item.creationLink}
            creationName={item.creationName}
            creationTechno={item.creationTechno}
            creationImage={item.creationImage}
            creationImageAlt={item.creationImageAlt}
          />
        ))}
      </ul>
    </div>
  );
};

CreationList.propTypes = {
  creation: PropTypes.arrayOf(
    PropTypes.shape({
      creationLink: PropTypes.string.isRequired,
      creationName: PropTypes.string.isRequired,
      creationTechno: PropTypes.string.isRequired,
      creationImage: PropTypes.string.isRequired,
      creationImageAlt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CreationList;
