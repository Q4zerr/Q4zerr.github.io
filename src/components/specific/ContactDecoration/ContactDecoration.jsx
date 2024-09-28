import "./ContactDecoration.css";
import LogoBig from "../../../assets/images/logo_big_white.png";
import ParallaxContainer from "../../common/ParallaxContainer/ParallaxContainer";

const ContactDecoration = () => {
  const configQuote = [{ translateXMultiplier: 30, translateYMultiplier: 30, rotateMultiplier: 2, scale: 1 }];
  const configBubble = [{ translateXMultiplier: 90, translateYMultiplier: 90, rotateMultiplier: 2, scale: 1 }];

  return (
    <div className="contact-decoration">
      <ParallaxContainer config={configBubble}>
        <div className="contact-bubbles parallax">
          <div className="ct-bubble logo">
            <img src={LogoBig} alt="Logo Tanguy" />
          </div>
          <div className="ct-bubble b1"></div>
          <div className="ct-bubble b2"></div>
          <div className="ct-bubble b3"></div>
          <div className="ct-bubble b4"></div>
        </div>
      </ParallaxContainer>
      <ParallaxContainer config={configQuote}>
        <div className="contact-quote parallax">
          <span className="quote-f">Une requête ?</span>
          <p className="quote-s">
            <span>Contactez-moi</span> !
            <p className="glow">
              <span>Contactez-moi</span> !
            </p>
          </p>
        </div>
      </ParallaxContainer>
    </div>
  );
};

export default ContactDecoration;
