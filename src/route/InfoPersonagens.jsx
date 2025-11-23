import "./InfoPersonagens.css";

// Imagens dos personagens
import gionen from "../assets/img/gionen.jpg";
import mitsuri from "../assets/img/mitsuri.jpg";
import obanai from "../assets/img/obanai.jpg";
import rengoku from "../assets/img/rengoku.jpg";
import shinobu from "../assets/img/shinobu.jpg";
import tomioka from "../assets/img/tomioka.jpg";

import TANJIRO3 from "../assets/img/TANJIRO3.gif";
import TANJIROGI2 from "../assets/img/TANJIROGI2.gif";

// Dados dos personagens com nome + descrição real
const cardData = [
  {
    id: 1,
    imageUrl: gionen,
    name: "Giyu Gionen",
    title: "Mestre da Harmonia Natural",
    desc: "Um artista silencioso que expressa suas emoções através de pinceladas suaves e profundas."
  },
  {
    id: 2,
    imageUrl: rengoku,
    name: "Kyojuro Rengoku",
    title: "Chama da Inspiração",
    desc: "Seu estilo vibrante e cheio de energia transmite calor, paixão e esperança."
  },
  {
    id: 3,
    imageUrl: mitsuri,
    name: "Mitsuri Kanroji",
    title: "Doce Flor do Amor",
    desc: "Pinta utilizando cores leves e delicadas, trazendo vida e sensibilidade às suas obras."
  },
  {
    id: 4,
    imageUrl: obanai,
    name: "Obanai Iguro",
    title: "Traços da Serpente",
    desc: "Suas pinturas possuem curvas elegantes e linhas firmes, criando composições únicas."
  },
  {
    id: 5,
    imageUrl: shinobu,
    name: "Shinobu Kocho",
    title: "Borboleta da Primavera",
    desc: "Com sutileza e precisão, suas obras misturam leveza, perfume e tranquilidade."
  },
  {
    id: 6,
    imageUrl: tomioka,
    name: "Giyu Tomioka",
    title: "Fluxo da Calmaria",
    desc: "Pinceladas fluidas como água corrente, criando paisagens serenas e profundas."
  },
];

const CardItem = ({ imageUrl, name, title, desc }) => (
  <div className="card2">
    <div className="cardImageContainer">
      <img src={imageUrl} alt={name} className="brushImage" />
    </div>

    <div className="cardText">
      <h3 className="cardName">{name}</h3>
      <p className="cardTitle">{title}</p>
      <p className="cardDesc">{desc}</p>
    </div>
  </div>
);

const InfoPersonagens = () => {
  return (
    <div className="pageContainer">

      <section className="cardsSection">
        
        <h1 className="title">Personagens</h1>

        {/* Banner de pinturas */}
        <div className="paintingRow">
          <img src={TANJIROGI2} alt="Pintura 1" className='painting' />
          <img src={TANJIRO3} alt="Pintura 2" className='painting' />
        </div>

        {/* Cards */}
        <div className="cardsGrid">
          {cardData.map((card) => (
            <CardItem
              key={card.id}
              imageUrl={card.imageUrl}
              name={card.name}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InfoPersonagens;
