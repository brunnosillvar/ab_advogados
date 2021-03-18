import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Empresarial extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Empresarial</h1>
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
            No Direito Empresarial, a atuação Augusto e Barros Sociedade de
            Advogados está intimamente ligada naa atualizações legislativas,
            doutrinárias e jurisprudenciais relacionadas com as atividades
            principais da empresa. O papel do escritório é respaldar a empresa
            no seu desenvolvimento, evitando, principalmente, o desperdício de
            tempo e dinheiro em longos conflitos judiciais, destacando-se as
            seguintes atividades:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>
              Contratos empresariais: negociação, elaboração, revisão e
              discussão das minutas contratuais;
            </p>
          </li>
          <li>
            <p>
              Recuperação Judicial, Extrajudicial e Falência: assessoria
              jurídica a devedores e a credores;
            </p>
          </li>
          <li>
            <p>
              Litígios empresariais: propositura de ações judiciais e
              apresentação de defesas, inclusive em segunda instância e
              tribunais superiores;
            </p>
          </li>
          <li>
            <p>Defesa do patrimônio dos sócios e da empresa;</p>
          </li>
          <li>
            <p>Sucessão empresarial;</p>
          </li>
          <li>
            <p>
              Marcas e patentes: respostas a consultas e elaboração de opiniões
              legais e adoção de medidas judiciais e extrajudiciais fundadas na
              Lei de Propriedade Industrial;
            </p>
          </li>
          <li>
            <p>
              Mercado de Capitais: assessoria jurídica a companhias e aos seus
              órgãos; assessoria jurídica a administradores e gestores de fundos
              de investimento; atuação em processos administrativos perante a
              CVM; respostas a consultas e elaboração de opiniões legais.
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

export default Empresarial;
