import "./CertificationItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const CertificationItem = ({ title, legend, image, altText, link }) => {
  return (
    <div className="certification-item">
      <div className="certif-item-box">
        <img src={image} alt={altText} />
        <img src={image} alt={altText} className="certif-img-blur" />
        <div className="certif-item-label">
          <p>{title}</p>
          <span>{legend}</span>
        </div>
      </div>
      <div className="certif-item-deco">
        <div className="decoration-dot bot"></div>
        <div className="decoration-dot mid"></div>
        <div className="decoration-dot top"></div>
        <div className="certif-btn-fullscreen">
          <a className="btn-fullscreen" href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

CertificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CertificationItem;
