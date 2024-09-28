import { useState } from "react";
import "./ContactMe.css";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c8ddc32e-eaa0-43f9-8d70-70c9a8b40485");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // prettier-ignore
        "Accept": "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "C'est envoyé !",
        text: "Votre message a été envoyé avec succès.",
        icon: "success",
        confirmButtonText: "OK",
        // Custom styling
        customClass: {
          title: "custom-title",
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
        buttonsStyling: false,
      });
    } else {
      Swal.fire({
        title: "Oups !",
        text: "Un problème est survenu. Veuillez réessayer.",
        icon: "error",
        confirmButtonText: "OK",
        // Custom styling
        customClass: {
          title: "custom-title",
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
        buttonsStyling: false,
      });
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit} className="contact-form">
        <div className="row">
          <div className="form-input">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="john.doe@domain.com" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="subject">Objet</label>
          <input type="text" name="subject" placeholder="Design, Site web, Prototype..." value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea cols="30" rows="10" name="message" placeholder="Bonjour..." value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="form-submit">
          <div className="form-submit-text">
            <span className="origin">ENVOYER</span>
            <span className="hover">ENVOYER</span>
            <span className="none">ENVOYER</span>
          </div>
          <div className="form-submit-bg"></div>
          <div className="form-submit-bg-glow"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
