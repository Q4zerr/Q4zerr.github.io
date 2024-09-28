import coverImage from "../assets/images/creation/gsmedia/gsmedia.png";
import videoSlider from "../assets/images/creation/gsmedia/gsmedia_slider.mp4";
import videoNews from "../assets/images/creation/gsmedia/gsmedia_news.mp4";
import projectImage from "../assets/images/creation/gsmedia/gsmedia_projects.png";

const article = {
  title: "GS Media",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  technologiesDetails: ["HTML5", "CSS3", "JavaScript", "PHPMailer", "Pinterest"],
  description: "Une agence digitale dédiée à la création de votre site web.",
  coverImage: coverImage,
  projectSummary: (
    <>
      <p className="project-details-pitch-item">
        J&apos;ai développé l&apos;interface du projet <span className="highlight">GS Media</span> dans le cadre d&apos;une collaboration pour le développement d&apos;une{" "}
        <span className="highlight">agence digitale</span> basée à <span className="highlight">Dubaï.</span>
      </p>
      <p className="project-details-pitch-item">
        GS Media offre des services de <span className="highlight">création de sites web</span> et d&apos;accompagnement en <span className="highlight">communication</span> pour aider ses clients à
        renforcer leur image de marque.
      </p>
      <p className="project-details-pitch-item">
        Ma mission a consisté à prendre en charge la <span className="highlight">conceptualisation</span> et le <span className="highlight">développement</span> des sites internet en participant aux{" "}
        <span className="highlight">rendez-vous clients</span>, en concevant des <span className="highlight">maquettes</span> et <span className="highlight">prototypes</span> d&apos;applications web,
        et en veillant à créer des <span className="highlight">interfaces modernes</span> et adaptées à l&apos;image de marque de chaque client.
      </p>
      <p className="project-details-pitch-item">
        Cette expérience chez GS Media m&apos;a permis de gérer un projet de bout en bout, de <span className="highlight">gagner en aisance</span> lors des échanges avec les clients, et de renforcer
        mes
        <span className="highlight">compétences en communication</span>.
      </p>
      <p className="project-details-pitch-item">
        Ce projet a été <span className="highlight">enrichissant</span> à la fois sur le plan technique et relationnel 😄.
      </p>
    </>
  ),
  clientName: "GS Media",
  year: "2023",
  role: "Développeur Front-End",
  projectLink: "https://example.com",
  projectLinkText: "Visiter le site",
  images: [
    { url: coverImage, altText: "GS Media image d'accueil" },
    { url: videoSlider, altText: "GS Media Carousel Vidéo", isVideo: true },
    { url: videoNews, altText: "GS Media Actualités Vidéo", isVideo: true },
    { url: projectImage, altText: "GS Media image projets" },
  ],
  credits: [{ name: "Tanguy Avet", role: "Développeur Front-End" }],
  nextProject: {
    name: "Clustree",
    link: "/next-project",
  },
  previousProject: {
    name: "Cybria",
    link: "/projects/cybria",
  },
};

export default article;
