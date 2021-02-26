import React, { Component } from 'react';
import './areas.css';
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
                <div className="tituloAreas"><h1>ÁREAS DE ATUAÇÃO</h1></div>
                <div class="container">
                    <div className="row">
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={empresarial} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreasFontMenor">
                                    <p>Empresarial</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={imobiliario} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Imobiliário</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm" id="border">
                            <div className="row">
                                <div className="col-sm">
                                    <img src={trabalhista} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Trabalhista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="container">
                    <div className="row">
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={familia} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Família, Sucessões e Planejamento Patrimonial</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={compliance} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Compliance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={civel} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Cível</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm" id="border">
                        <div className="row">
                                <div className="col-sm">
                                    <img src={tributaria} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Tributaria</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm" id="border">
                            <div className="row">
                                <div className="col-sm">
                                    <img src={criminal} width="150px" height="150px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoAreas">
                                    <p>Criminal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Areas;
