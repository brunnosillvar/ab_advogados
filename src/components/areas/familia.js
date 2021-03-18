import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Familia extends Component {
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>
            Área de Atuação: Família, Sucessões e Planejamento Patrimonial
          </h1>
          <div className="tituloDetailButton">
            <a
              href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
              target="_blank"
              id="tituloDatailButton"
            >
              Entre em contato agora via WhatsApp!
            </a>
          </div>
        </div>
        <div className="textoAreaDetail">
          <p>
            A Augusto e Barros Sociedade de Advogados, presta serviços de
            natureza consultiva e contenciosa no Direito de Família, Sucessões e
            Planejamento Patrimonial, seja por meio do patrocínio e
            acompanhamento de ações judiciais, seja através de demandas da
            competência do cartório de registro civil:
          </p>
        </div>
        <h5>Consultivo Família e Sucessões</h5>
        <ul className="listAreaDetail">
          <li>
            <p>Elaboração de testamentos;</p>
          </li>
          <li>
            <p>Elaboração de pactos antinupciais;</p>
          </li>
          <li>
            <p>Contratos de união estável e de namoro;</p>
          </li>
          <li>
            <p>Nomeação de tutores e curadores;</p>
          </li>
          <li>
            <p>Acordos relacionados a matéria de família e sucessões;</p>
          </li>
          <li>
            <p>Pareceres relacionados a matéria de família e sucessões;</p>
          </li>
          <li>
            <p>Divórcio Extrajudicial.</p>
          </li>
        </ul>
        <h5>Contencioso Família e Sucessões</h5>
        <ul className="listAreaDetail">
          <li>
            <p>Divórcio judicial;</p>
          </li>
          <li>
            <p>Reconhecimento e dissolução de união estável;</p>
          </li>
          <li>
            <p>Partilha, sobrepartilha e arrolamento de bens;</p>
          </li>
          <li>
            <p>Testamento e inventário;</p>
          </li>
          <li>
            <p>Tutela, curatela e interdição;</p>
          </li>
          <li>
            <p>Alimentos, guarda e visitas;</p>
          </li>
          <li>
            <p>Execução de alimentos;</p>
          </li>
          <li>
            <p>Investigação e reconhecimento de paternidade;</p>
          </li>
          <li>
            <p>Retificação de registro civil;</p>
          </li>
          <li>
            <p>Planejamento patrimonial (familiar e sucessório).</p>
          </li>
        </ul>
        <h5>Planejamento Patrimonial</h5>
        <ul className="listAreaDetail">
          <li>
            <p>
              Estruturar e/ou organizar os bens familiares visando a questão da
              sucessão;
            </p>
          </li>
          <li>
            <p>
              Estruturar e/ou organizar a empresa familiar visando a questão da
              sucessão;
            </p>
          </li>
          <li>
            <p>
              Constituição de sociedades visando o planejamento patrimonial;
            </p>
          </li>
          <li>
            <p>
              Reorganização dos bens familiares ou de empresa familiar por meio
              da criação de sociedades, fusão, cisão, incorporação e alteração
              do tipo societário;
            </p>
          </li>
          <li>
            <p>
              Elaboração de acordos e atas de acionistas ou quotistas em relação
              às questões sucessórias.
            </p>
          </li>
        </ul>
        <div className="tituloDetailButton">
          <a
            href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
            target="_blank"
          >
            Fale agora com um advogado especialista!
          </a>
        </div>
        <Contato />
      </div>
    );
  }
}

export default Familia;
