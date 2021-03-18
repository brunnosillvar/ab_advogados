import React, { Component } from "react";
import "./equipe.css";
import cristiano from "../../assets/images/Cristiano.jpeg";
import barros from "../../assets/images/Barros.png";

class Equipe extends Component {
  render() {
    return (
      <div className="equipe" id="equipe">
        <div className="tituloEquipe">
          <h1>SÓCIOS</h1>
        </div>
        <div className="container" id="equipegeral">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm" id="perfil">
                  <img src={barros} width="180px" height="180px" alt="" />
                </div>
                <div className="col-sm" id="paragrafoEquipe">
                  <p>
                    Natanael Santos Barros
                    <br />
                    Sócio- Diretor, Pós- Graduado em Direito Processual Civil,
                    Pós- Graduado em Direito Empresarial, Graduando em Ciências
                    Econômicas.
                    <br />
                    Áreas de Atuação: Cível, Compliance e Empresarial.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                <div className="col-sm" id="perfil">
                  <img src={cristiano} width="180px" height="180px" alt="" />
                </div>
                <div className="col-sm" id="paragrafoEquipe">
                  <p>
                    Cristiano de Oliveira Augusto
                    <br />
                    Sócio- Diretor, Pós- Graduado em Direito e Processo do
                    Trabalho, Pós- Graduando em Direito e Processo Penal.
                    <br />
                    Áreas de Atuação: Criminal e Trabalhista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Equipe;
