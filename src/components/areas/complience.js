import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";
import whats from "../../assets/icones/Whats.png";

class Compliance extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Compliance</h1>
          <div className="tituloDetailButton">
            <img src={whats} alt="" width="50px" />
            <a
              href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
              target="_blank"
              id="BotaoComplianceSuperior"
            >
              Entre em contato agora via WhatsApp!
            </a>
          </div>
        </div>
        <div className="textoAreaDetail">
          <p>
            O compliance é uma estratégia essencial de negócio, pois sinaliza
            que há transparência e um nível alto de maturidade no gerenciamento
            do empreendimento. O fato de uma empresa possuir um programa
            de compliance mostra que seus gestores e colaboradores conhecem os
            procedimentos implantados e realizados na empresa, norteando suas
            atividades de acordo com a legalidade trabalhista, comportamental,
            política e comercial. Não adotar esse método, por sua vez, passa a
            ideia contrária. Sem um programa de compliance, a empresa corre
            grandes riscos desnecessários, os quais podem levar a diversos
            prejuízos financeiros e patrimoniais. Desse modo, a Augusto e Barros
            Sociedade de Advogados apresenta às empresas que ainda não possuem
            tal estratégia pensem a respeito. Com o compliance, se poderá
            alinhar a maneira como as informações da companhia são tratadas e
            como as pessoas nela inseridas agem no dia a dia.
            <p>Assim, apresentamos os seguintes serviços:</p>
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>
              Consultoria na implementação e revisão de programa de compliance;
            </p>
          </li>
          <li>
            <p>Assessoria na elaboração do Código de Ética e Conduta;</p>
          </li>
          <li>
            <p>Mapeamento de processos e gestão de riscos;</p>
          </li>
          <li>
            <p>Assessoria jurídica em temas de compliance;</p>
          </li>
          <li>
            <p>Assessoria na implantação do canal de denúncia;</p>
          </li>
          <li>
            <p>Apoio em comunicação e treinamentos.</p>
          </li>
        </ul>
        <div className="tituloDetailButton">
          <a
            href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
            target="_blank"
            id="BotaoComplianceInferior"
          >
            Fale agora com um advogado especialista!
          </a>
        </div>
        <Contato />
      </div>
    );
  }
}

export default Compliance;
