import "./AboutText.css";

const AboutText = () => {
  return (
    <div className="about-text">
      <p className="about-custom-text">
        Je suis
        <small className="about-text-who">
          <span className="main-text-gradient"> Tanguy Avet</span>
        </small>
        , développeur full-stack passionné situé en France.
      </p>
      <br />
      <p>
        Animé par la curiosité et un désir constant d&apos;apprentissage, je m&apos;intéresse à tous les aspects du développement et bien au-delà. Je cherche perpétuellement à élargir mes
        connaissances
      </p>
      <br />
      <p>Je suis également passionné par le design UI/UX, ce qui me permet d&apos;associer cette passion à mon vocation de développeur full-stack et ainsi de créer des interfaces modernes.</p>
      <br />
      <p>
        Chaque projet est pour moi une occasion de repousser mes limites et d&apos;apprendre quelque chose de nouveau, avec l&apos;ambition d&apos;évoluer constamment dans le domaine du développement
        web.
      </p>
    </div>
  );
};

export default AboutText;
