import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Criminal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Criminal</h1>
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
            No campo do direito penal, a atuação da Augusto e Barros Sociedade
            de Advogados tem fundamento na missão e valores que cultivamos, com
            fito a promover uma advocacia que permita a defesa da pessoa humana
            e a fiscalização do regular exercício do poder punitivo do estado,
            destacando-se as seguintes atividades:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>Acompanhamento em Flagrante;</p>
          </li>
          <li>
            <p>Acompanhamento em Delegacia;</p>
          </li>
          <li>
            <p>Audiência de Custódia;</p>
          </li>
          <li>
            <p>Defesa em Inquérito Policial e em Ação Penal;</p>
          </li>
          <li>
            <p>Requerimento para revogação ou relaxamento de prisão;</p>
          </li>
          <li>
            <p>Impetração de Habeas Corpus;</p>
          </li>
          <li>
            <p>Pedido de Liberdade Provisória;</p>
          </li>
          <li>
            <p>Pedido de Progressão de Regime;</p>
          </li>
          <li>
            <p>Pedido de Transferência;</p>
          </li>
          <li>
            <p>Revisão Criminal;</p>
          </li>
          <li>
            <p>Recursos em Geral;</p>
          </li>
          <li>
            <p>Pedido de Instauração de Queixa Crime;</p>
          </li>
          <li>
            <p>Lei Maria da Penha e Medidas Protetivas</p>
          </li>
        </ul>
        <div className="tituloDetailButton">
          <a
            href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
            target="_blank"
          >
            Fale agora com um advogado criminalista!
          </a>
        </div>
        <Contato />
      </div>
    );
  }
}

export default Criminal;
