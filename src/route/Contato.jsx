import Eu from "../assets/img/eu.jpg";

import "./Contato.css";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados a serem enviados:", formData);
    alert("Mensagem enviada! (Simulação)");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <section className="profile-header">
        <div className="profile-info">
          <img src={Eu} alt="eu" className="profile-photo" />
        </div>
        <div className="text-content">
          <h1>Geovane</h1>
          <p>Desenvolvedor React</p>
        </div>

        <div className="social-links">
          {/* Adicione seus links reais nos hrefs */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#ffffffff" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#ffffffff" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#ffffffff" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#ffffffff" />
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Envie-me uma Mensagem</h2>
        {/* FUNÇÃO handleSubmit AGORA ESTÁ NO ESCOPO CORRETO */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu Melhor E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Sua Mensagem..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
