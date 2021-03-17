import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Compliance extends Component {
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Complience</h1>
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
            como as pessoas nela inseridas agem no dia a dia. Assim,
            apresentamos os seguintes serviços:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li className="media pt-2">
            <p id="descricao">
              Consultoria na implementação e revisão de programa de compliance;
            </p>
          </li>
          <li className="media pt-2">
            <p>Assessoria na elaboração do Código de Ética e Conduta;</p>
          </li>
          <li className="media pt-2">
            <p>Mapeamento de processos e gestão de riscos;</p>
          </li>
          <li className="media pt-2">
            <p>Assessoria jurídica em temas de compliance;</p>
          </li>
          <li className="media pt-2">
            <p>Assessoria na implantação do canal de denúncia;</p>
          </li>
          <li className="media pt-2">
            <p>Apoio em comunicação e treinamentos.</p>
          </li>
        </ul>

        <Contato />
      </div>
    );
  }
}

export default Compliance;
