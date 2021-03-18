import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Tributario extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Tributário</h1>
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
            No Direito Tributário, tanto no contencioso administrativo ou
            judicial, o objetivo da Augusto e Barros Sociedade de Advogados é
            suprir a necessidade do contribuinte, bem como recuperar créditos e
            afastar a cobrança de tributos ilegais e inconstitucionais. Por meio
            de especialistas em Direito Tributário é encontrada a melhor forma
            de defender o empresariado da sanha voraz, e muitas vezes ilegal, do
            Fisco. A utilização de um correto Planejamento Tributário e da
            melhor argumentação jurídica proporciona ao cliente a segurança e a
            tranquilidade necessárias para gerir seus empreendimentos com a
            menor oneração tributária possível.
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>Administração e levantamento de Passivo Tributário;</p>
          </li>
          <li>
            <p>
              Consultoria específica referente à legislação pertinente, nas
              áreas de PIS, COFINS, SIMPLES NACIONAL, IPI, ICMS, ISS, INSS;
              Análise e informações sobre operações fiscais, procedimentos
              inerentes à legislação a ser aplicada, dando o efetivo suporte às
              questões tributárias e fiscais;
            </p>
          </li>
          <li>
            <p>Consultoria e Acompanhamento a Fiscalizações;</p>
          </li>
          <li>
            <p>
              Realização de estudo da legislação e toda matéria da ordem
              tributária;
            </p>
          </li>
          <li>
            <p>Elaboração de Defesas Jurídicas e Administrativas;</p>
          </li>
          <li>
            <p>
              Elaboração de Pareceres Jurídicos, Consultas Fiscais e
              Planejamento Tributário, visando à economia tributária para o
              Cliente, objetivando, de forma lícita, sempre de acordo com a
              legislação vigente, economia de tributos com a elisão fiscal
              realizada;
            </p>
          </li>
          <li>
            <p>Assessoria junto à efetivação de parcelamentos fiscais.</p>
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

export default Tributario;
