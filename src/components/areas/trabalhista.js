import React, { Component } from "react";
import "./areas.css";
import Contato from "../contato";

class Trabalhista extends Component {
  render() {
    return (
      <div className="areaDetail">
        <div className="tituloAreaDetail">
          <h1>Área de Atuação: Trabalhista</h1>
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
            A advocacia exercida pela nossa equipe especializada do Núcleo
            Trabalhista tem como base a busca pela justiça social e pela
            garantia dos direitos e da dignidade da pessoa humana e jurídica.
            <br /> A Augusto e Barros Sociedade de Advogados atua nas áreas
            preventiva e contenciosa, defendendo os direitos, tanto dos
            empregados quanto dos prestadores de serviços empregadores e
            tomadores de serviços.
            <br />
            Destacam-se as atividades para atender a necessidades de sua
            Empresa:
          </p>
        </div>
        <ul className="listAreaDetail">
          <li>
            <p>Elaboração de defesas e acompanhamento processual;</p>
          </li>
          <li>
            <p>
              Identificação de procedimentos administrativos inadequados e a
              adoção de medidas que reduzem a exposição da empresa a reclamações
              trabalhistas;
            </p>
          </li>
          <li>
            <p>Defesa administrativa junto aos órgãos fiscalizadores (DRT);</p>
          </li>
          <li>
            <p>Alterações do contrato de trabalho;</p>
          </li>
          <li>
            <p>Rescisão do contrato de trabalho;</p>
          </li>
          <li>
            <p>Terceirizações;</p>
          </li>
          <li>
            <p>Trabalhador cooperado;</p>
          </li>
          <li>
            <p>Estabilidade no emprego;</p>
          </li>
          <li>
            <p>Horas extras;</p>
          </li>
          <li>
            <p>Trabalhador e doenças profissionais;</p>
          </li>
          <li>
            <p>Insalubridade e periculosidade.</p>
          </li>
        </ul>
        <p id="paragrafoTrabalhista">
          Destacam-se as atividades para atender a necessidades dos
          trabalhadores e empregados:
        </p>
        <p id="paragrafoTrabalhista">Ressarcimento por:</p>
        <ul className="listAreaDetail">
          <li>
            <p>Trabalho sem carteira assinada;</p>
          </li>
          <li>
            <p>Cooperativas fraudulentas;</p>
          </li>
          <li>
            <p>Terceirizações ilegais;</p>
          </li>
          <li>
            <p>Estágios fraudulentos;</p>
          </li>
          <li>
            <p>Aplicação da "justa causa" de forma indevida;</p>
          </li>
          <li>
            <p>Pedidos de demissão forçados;</p>
          </li>
          <li>
            <p>Jornadas de trabalho abusivas;</p>
          </li>
          <li>
            <p>
              Fraudes na marcação do cartão de ponto ou da folha de presença;
            </p>
          </li>
          <li>
            <p>Horas extras não pagas;</p>
          </li>
          <li>
            <p>
              Condições de trabalho prejudiciais à saúde e segurança do
              trabalhador (insalubridade e periculosidade).
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

export default Trabalhista;
