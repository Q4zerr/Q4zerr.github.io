import { useState, useEffect, useRef } from "react";
import "./CreationItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CreationItem = ({ creationLink, creationName, creationTechno, creationImage, creationImageAlt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clipPathValue, setClipPathValue] = useState("clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);");
  const [opacityValue, setOpacityValue] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      // Animation on hover
      let startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const duration = 300; // Animation duration in ms
        const opacityDuration = 220;
        const progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1
        const progressOpacity = Math.min(elapsedTime / opacityDuration, 1);

        const clipPathValue = `polygon(0% ${100 - (progress * 100).toFixed(4)}%, 100% ${100 - (progress * 100).toFixed(4)}%, 100% 100%, 0% 100%)`;
        const opacityValue = progressOpacity.toFixed(3);

        setClipPathValue(clipPathValue);
        setOpacityValue(opacityValue);

        if (progress === 1) {
          clearInterval(intervalRef.current);
        }
      }, 16); // Approx 60fps
    } else {
      // Animation on leave
      let startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const duration = 200; // Animation duration in ms
        const opacityDuration = 300;
        const progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1
        const progressOpacity = Math.min(elapsedTime / opacityDuration, 1);

        const clipPathValue = `polygon(0% 0%, 100% 0%, 100% ${100 - (progress * 100).toFixed(4)}%, 0% ${100 - (progress * 100).toFixed(4)}%)`;
        const opacityValue = (1 - progressOpacity).toFixed(3);

        setClipPathValue(clipPathValue);
        setOpacityValue(opacityValue);

        if (progress === 1) {
          clearInterval(intervalRef.current);
        }
      }, 16); // Approx 60fps
    }

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li className="creations-article">
      <div className="creations-link-container">
        <div className="creations-name-container">
          <Link to={creationLink} className="creations-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={`creations-name${isHovered ? " hover" : ""}`}>{creationName}</span>
          </Link>
          <div className="creations-technos-container">
            <div className={`creations-technos${isHovered ? " hover" : ""}`}>{creationTechno}</div>
          </div>
        </div>
        <img
          src={creationImage}
          alt={creationImageAlt}
          className="creations-preview"
          style={{
            clipPath: clipPathValue,
            opacity: opacityValue,
          }}
        />
      </div>
    </li>
  );
};

CreationItem.propTypes = {
  creationLink: PropTypes.string.isRequired,
  creationName: PropTypes.string.isRequired,
  creationTechno: PropTypes.string.isRequired,
  creationImage: PropTypes.string.isRequired,
  creationImageAlt: PropTypes.string.isRequired,
};

export default CreationItem;
