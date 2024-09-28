import "./HeroScroll.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HeroScroll = () => {
  return (
    <div className="hero-scroll">
      <button className="hero-scroll-btn">
        <span>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
        </span>
      </button>
      <div className="hero-scroll-shadow">
        <span>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
        </span>
      </div>
      <div className="hero-scroll-shadow">
        <span>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
        </span>
      </div>
      <div className="hero-scroll-shadow">
        <span>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
        </span>
      </div>
    </div>
  );
};

export default HeroScroll;
