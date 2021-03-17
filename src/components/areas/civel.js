import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Civel extends Component {
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Cível</h1>
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
          <li>
            <p>Aconselhamento jurídico preventivo;</p>
          </li>
          <li>
            <p>Ações indenizatórias;</p>
          </li>
          <li>
            <p>Ações de anulação de negócio jurídico;</p>
          </li>
          <li>
            <p>Ações de revisão e rescisão de contratos em geral;</p>
          </li>
          <li>
            <p>Ações relacionadas às obrigações (fazer, não fazer e dar);</p>
          </li>
          <li>
            <p>Advocacia de negociação;</p>
          </li>
          <li>
            <p>Mediação de conflitos.</p>
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

export default Civel;
