import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./areas.css";
import civel from "../../assets/icones/Civel.png";
import trabalhista from "../../assets/icones/Trabalhista.png";
import familia from "../../assets/icones/Familia.png";
import tributaria from "../../assets/icones/Tributaria.png";
import criminal from "../../assets/icones/Criminal.png";
import compliance from "../../assets/icones/compliance.png";
import imobiliario from "../../assets/icones/imobiliario.png";
import empresarial from "../../assets/icones/empresarial.png";

class Areas extends Component {
  render() {
    return (
      <div className="areas" id="areas">
        <div className="tituloAreas">
          <h1>ÁREAS DE ATUAÇÃO</h1>
        </div>
        <div className="textoAreas">
          <p>
            A Augusto e Barros Sociedade de Advogados atende toda e qualquer
            demanda, destacando-se pela maneira objetiva, correta, moderna e
            eficaz que adota para assessorar clientes a solucionar problemas.
            Veja abaixo as áreas do direito na qual atuamos:
          </p>
        </div>
        <div class="container">
          <div className="row">
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/civel">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img src={civel} width="150px" height="150px" alt="" />
                    <p>Cível</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/compliance">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img src={compliance} width="150px" height="150px" alt="" />
                    <p>Compliance</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/criminal">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img src={criminal} width="150px" height="150px" alt="" />
                    <p>Criminal</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div className="row">
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/empresarial">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img
                      src={empresarial}
                      width="150px"
                      height="150px"
                      alt=""
                    />
                    <p>Empresarial</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/familia">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img src={familia} width="150px" height="150px" alt="" />
                    <p>Família, Sucessões e Planejamento Patrimonial</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div className="row">
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/imobiliario">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img
                      src={imobiliario}
                      width="150px"
                      height="150px"
                      alt=""
                    />
                    <p>Imobiliário</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/trabalhista">
                  <div className="paragrafoAreas" id="paragrafoAreas">
                    <img
                      src={trabalhista}
                      width="150px"
                      height="150px"
                      alt=""
                    />
                    <p>Trabalhista</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm" id="border">
              <div className="row">
                <Link to="/tributario">
                  <div className="col-sm" id="paragrafoAreas">
                    <img src={tributaria} width="150px" height="150px" alt="" />
                    <p>Tributário</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Areas;
