import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Civel extends Component {
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Cível</h1>
        </div>
        <div className="textoAreaDetail">
          <p>
            Na área cível, a Augusto e Barros Sociedade de Advogados foca nas
            ações relacionadas à proteção aos direitos e garantias do
            consumidor, bem como na defesa da honra, da imagem, da personalidade
            dos indivíduos. Logo, nossa atuação compreende o contencioso
            judicial, em todas as instâncias do Poder Judiciário, bem como na
            demanda consultiva, através de orientações para fomentar acordos
            judiciais ou extrajudiciais, participando, ativamente, das
            negociações, dentre as atividades, destacam-se:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li className="media pt-2">
            <p id="descricao">Aconselhamento jurídico preventivo;</p>
          </li>
          <li className="media pt-2">
            <p>Ações indenizatórias;</p>
          </li>
          <li className="media pt-2">
            <p>Ações de anulação de negócio jurídico;</p>
          </li>
          <li className="media pt-2">
            <p>Ações de revisão e rescisão de contratos em geral;</p>
          </li>
          <li className="media pt-2">
            <p>Ações relacionadas às obrigações (fazer, não fazer e dar);</p>
          </li>
          <li className="media pt-2">
            <p>Advocacia de negociação;</p>
          </li>
          <li className="media pt-2">
            <p>Mediação de conflitos.</p>
          </li>
        </ul>

        <Contato />
      </div>
    );
  }
}

export default Civel;
