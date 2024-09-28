/* eslint-disable react/jsx-no-comment-textnodes */
import "./HeroSideText.css";
import ParallaxContainer from "../../common/ParallaxContainer/ParallaxContainer";

const HeroSideText = () => {
  const configTextCode = [{ translateXMultiplier: 15, translateYMultiplier: 15, rotateMultiplier: 2, scale: 1 }];
  const configTextSkills = [{ translateXMultiplier: 30, translateYMultiplier: 30, rotateMultiplier: 2, scale: 1 }];

  return (
    <div className="hero-side-text">
      <div className="hero-side-text-container">
        <ParallaxContainer config={configTextSkills}>
          <div>
            <span className="side-text-top">Bienvenue, je suis</span>
          </div>
        </ParallaxContainer>
        <h1 className="side-text-title">Tanguy</h1>
        <ParallaxContainer config={configTextSkills}>
          <div className="side-text-skills">
            <span className="skills">Developper ✦ Designer ✦ Freelance</span>
          </div>
        </ParallaxContainer>
        <ParallaxContainer config={configTextCode}>
          <div className="side-text-code">
            <span className="code-desc">// Entrepreneur</span>
            <span className="code-desc">// Développeur FullStack</span>
            <span className="code-desc">// Développeur d&apos;applications</span>
          </div>
        </ParallaxContainer>
      </div>
    </div>
  );
};

export default HeroSideText;
