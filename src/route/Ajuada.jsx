import { isValidElement, useState } from "react";
import "./Ajuda.css"

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {/* O conteúdo aparece apenas se isOpen for true */}
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Ajuada = () => {
  const faqData = [
    {
      category: "Geral e Sobre o Projeto",
      questions: [
        {
          title: "Qual é o objetivo deste projeto?",
          content:
            "Este projeto é um portfólio/demonstração de minhas habilidades em React, focado em...",
        },
        {
          title: "Onde posso ver os Termos de Uso?",
          content:
            "Você pode encontrar os termos de uso no rodapé da página principal ou clicando aqui.",
        },
      ],
    },
    {
      category: "Conta e Acesso",
      questions: [
        {
          title: "Como crio uma conta de usuário?",
          content:
            "No momento, este é um projeto de demonstração e não exige criação de conta. O formulário de contato serve apenas para comunicação.",
        },
        {
          title: "Esqueci minha senha.",
          content: "Como não há contas de usuário, esta função não se aplica.",
        },
      ],
    },
  ];
  return (
    <div className="ajuda-container">
      <h1>Central de Ajuda e FAQ</h1>
      <p className="ajuda-intro">
        Encontre respostas para as perguntas mais comuns sobre o nosso projeto.
      </p>

      {faqData.map((section, index) => (
        <section key={index} className="ajuda-section">
          <h2>{section.category}</h2>
          {section.questions.map((item, qIndex) => (
            <AccordionItem
              key={qIndex}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
      ))}

      <section className="ajuda-contato">
        <h2>Ainda precisa de ajuda?</h2>
        <p>
          Se você não encontrou a resposta, por favor, utilize o nosso{" "}
          <a href="/contato">Formulário de Contato</a> ou envie um e-mail
          diretamente.
        </p>
      </section>
    </div>
  );
};

export default Ajuada;
