import coverImage from "../assets/images/creation/cybria/cybria.png";
import cybriaCategoryImage from "../assets/images/creation/cybria/cybria_category.png";
import cybriaProductsImage from "../assets/images/creation/cybria/cybria_products.png";
import cybriaWhyImage from "../assets/images/creation/cybria/cybria_why.png";
import cybriaProductImage from "../assets/images/creation/cybria/cybria_product.png";

const article = {
  title: "CYBRIA",
  technologies: ["React JS", "React Native", "Laravel", "PostgreSQL", "Jest"],
  technologiesDetails: ["React JS", "React Native", "Laravel", "CSS", "Jest", "Expo Go", "Styled-Components", "PostgreSQL", "Postman"],
  description: "Une boutique E-Commerce dédiée à la création de l'espace de jeu ou de travail de vos rêves.",
  coverImage: coverImage,
  projectSummary: (
    <>
      <p className="project-details-pitch-item">
        En 2024, j&apos;ai conceptualisé et réalisé le projet <span className="highlight">Cybria</span> dans le cadre de mon examen pour le titre professionnel de{" "}
        <span className="highlight">Concepteur Développeur d&apos;Applications</span>.
      </p>
      <p className="project-details-pitch-item">
        Ma mission consistait à répondre à un <span className="highlight">besoin client</span> spécifique, en <span className="highlight">concevant</span> la base de données,{" "}
        <span className="highlight">développant</span> les fonctionnalités clés et en <span className="highlight">créant</span> une interface moderne, en parfaite adéquation avec l&apos;image de
        marque
      </p>
      <p className="project-details-pitch-item">
        Ce projet a représenté un véritable <span className="highlight">défi</span> en raison du délai serré qui nous était imposé. Il m&apos;a <span className="highlight">permis de me dépasser</span>
        , de <span className="highlight">gérer</span> un projet de bout en bout et <span className="highlight">d&apos;acquérir</span> de nombreuses{" "}
        <span className="highlight">compétences nouvelles</span>.
      </p>
      <p className="project-details-pitch-item">
        <span className="highlight">Cybria</span> m&apos;a également fait découvrir une technologie dans laquelle je souhaite me spécialiser <span className="highlight">React JS</span> 😃.
      </p>
    </>
  ),
  clientName: "CYBRIA",
  year: "2024",
  role: "Créateur",
  projectLink: "https://example.com",
  projectLinkText: "Visiter le site",
  images: [
    { url: cybriaProductsImage, altText: "Products Grid Cybria" },
    { url: cybriaWhyImage, altText: "Why Choose Us Cybria" },
    { url: cybriaCategoryImage, altText: "Category Cybria" },
    { url: cybriaProductImage, altText: "Product Page Cybria" },
  ],
  credits: [{ name: "Tanguy Avet", role: "Créateur" }],
  nextProject: {
    name: "GSMedia",
    link: "/projects/gsmedia",
  },
  previousProject: {
    name: "Handle-it",
    link: "/previous-project",
  },
};

export default article;
