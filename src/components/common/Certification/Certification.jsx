import { useState } from "react";
import CertificationItem from "../../specific/CertificationItem/CertificationItem";
import "./Certification.css";
import imgTest from "../../../assets/images/test.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Certification = () => {
  const certifications = [
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
    {
      title: "Certif1",
      legend: "OpenClassRoom",
      image: imgTest,
      altText: "Image certif1",
      link: "https://www.google.fr",
    },
  ];

  // Initialement on affiche que 4 éléments
  const [visibleCount, setVisibleCount] = useState(4);

  // Fonction pour charger 4 certifications en plus
  const loadMoreCertifications = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, certifications.length));
  };

  return (
    <section className="certification">
      <div className="certification-container">
        {certifications.slice(0, visibleCount).map((certification, key) => (
          <CertificationItem key={key} title={certification.title} legend={certification.legend} image={certification.image} altText={certification.altText} link={certification.link} />
        ))}
        {visibleCount < certifications.length && (
          <div className="certification-item grow">
            <button className="certif-more-art" onClick={loadMoreCertifications}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
