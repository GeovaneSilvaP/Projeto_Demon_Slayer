import React from "react";
import akaza from "../assets/img/akazaGif.gif";
import capaDemonSlayer from "../assets/img/capademonslayer.jpg";
import tanjiro from "../assets/img/tanjiroGif.gif";
import zenitsu from "../assets/img/zenitsuGif.gif";
import inosuke from "../assets/img/inosukeGif.gif";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="hero-section">
        <h1 className="akazaParagrafo">AKAZA</h1>
        <img src={akaza} alt="" className="background-img" />
      </header>

      <section className="bemvindo">
        <div className="texto">
          <h3>BEM-VINDO AO MUNDO DOS CAÇADORES DE DEMÔNIOS</h3>
          <p>
            Adentre a era Taishō e mergulhe na saga épica de Tanjiro Kamado e a
            Corporação de Caçadores de Demônios. Descubra as técnicas de
            Respiração, conheça os Hashiras lendários e confronte os Doze
            Kizuki. Aqui, você encontrará tudo sobre a jornada, os desafios e os
            laços inquebráveis que movem a luta contra Muzan Kibutsuji.
          </p>
          <button>Saiba mais</button>
        </div>
        <img src={capaDemonSlayer} alt="capa" />
      </section>

      <section className="infor1">
        <div className="card">
          <img src={tanjiro} alt="tanjiro" />
          <h4>Tanjiro</h4>
          <p>
            O herói determinado, mestre da Respiração da Água e do Hinokami
            Kagura. Sua compaixão e olfato apurado o guiam na busca por uma cura
            para sua irmã, enfrentando demônios e descobrindo a verdade por trás
            de sua linhagem.
          </p>
          <button>Saiba mais</button>
        </div>

        <div className="card">
          <img src={zenitsu} alt="zenitsu" />
          <h4>Zenitsu </h4>
          <p>
            Apesar de seu medo crônico, ele é um gênio da Respiração do Trovão.
            Quando desmaia de pavor, seu corpo assume o controle, liberando o
            poder devastador de sua única forma dominada, o Ichi no Kata.
          </p>
          <button>Saiba mais</button>
        </div>

        <div className="card">
          <img src={inosuke} alt="inosuke" />
          <h4>Inosuke</h4>
          <p>
            Criado por javalis, este caçador usa a excêntrica Respiração da
            Besta e duas lâminas serrilhadas. Impulsivo e barulhento, sua força
            física bruta e instintos selvagens são inestimáveis em combate.
          </p>
          <button>Saiba mais</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
