import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";
import whats from "../../assets/icones/Whats.png";

class Imobiliario extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Imobiliário</h1>
          <div className="tituloDetailButton">
            <img src={whats} alt="" width="50px" />
            <a
              href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
              target="_blank"
              id="BotaoImobiliarioSuperior"
            >
              Entre em contato agora via WhatsApp!
            </a>
          </div>
        </div>
        <div className="textoAreaDetail">
          <p>
            A Augusto e Barros Sociedade de Advogados, oferece além do
            conhecimento técnico e jurídico sobre todas as matérias relacionadas
            ao setor imobiliário, uma atuação rápida e de qualidade,
            apresentando o diagnóstico da situação e as soluções aos nossos
            clientes, destacam-se as atividades:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>
              Ação de despejo, cobrança de aluguéis, ação revisional e
              renovatória, condomínios edilícios (cobrança de inadimplentes,
              participação em assembleia, assessoria do síndico, administradora
              e do corpo diretivo e terceirização de mão de obra);
            </p>
          </li>
          <li>
            <p>
              Hipoteca, financiamento imobiliário, reintegração de posse,
              usucapião, registro de imóveis, parcelamento do solo urbano
              (loteamento, desmembramento e desdobro) e desapropriação;
            </p>
          </li>
          <li>
            <p>
              Estudo e estruturação de incorporações de empreendimentos
              residenciais, comerciais, elaboração de memorial de incorporação,
              convenção de condomínio, acompanhamento de registro e retificação
              de incorporação imobiliária;
            </p>
          </li>
          <li>
            <p>
              Elaboração de contratos de compra e venda, permuta, dação em
              pagamento, hipoteca, alienação fiduciária, locação residencial e
              comercial, parceria imobiliária;
            </p>
          </li>
          <li>
            <p>
              Consultoria e direcionamento nas estruturações de negócios
              imobiliários;
            </p>
          </li>
          <li>
            <p>
              Levantamento de documentação fundiária, análise jurídica dos
              riscos do negócio, escritura, registro e impostos;
            </p>
          </li>
          <li>
            <p>
              Averbações e buscas nos Cartórios de Registro de Imóveis,
              organização, regularização e atualização de documentação
              imobiliária;
            </p>
          </li>
          <li>
            <p>
              Registro de parcelamento de terrenos, loteamento e retificação de
              área nos Cartórios de Registro de Imóveis;
            </p>
          </li>
          <li>
            <p>
              Assessoria em Assuntos de Condomínios Residenciais, Comerciais e
              Industriais.
            </p>
          </li>
        </ul>
        <div className="tituloDetailButton">
          <a
            href="https://api.whatsapp.com/send?phone=5511953471360&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho."
            target="_blank"
            id="BotaoImobiliarioInferior"
          >
            Fale agora com um advogado especialista!
          </a>
        </div>
        <Contato />
      </div>
    );
  }
}

export default Imobiliario;
