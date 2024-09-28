import "./Hero.css";
import HeroSideImg from "../../specific/HeroSideImg/HeroSideImg";
import HeroSideText from "../../specific/HeroSideText/HeroSideText";
import HeroScroll from "../../specific/HeroScroll/HeroScroll";

const Hero = () => {
  return (
    <section className="hero">
      <HeroSideImg />
      <HeroSideText />
      <HeroScroll />
    </section>
  );
};

export default Hero;
