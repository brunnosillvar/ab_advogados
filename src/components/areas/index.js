import React, { Component } from 'react';
import './areas.css';
import civel from "../../assets/icones/Civel.png";
import trabalhista from "../../assets/icones/Trabalhista.png";
import familia from "../../assets/icones/Familia.png";
import tributaria from "../../assets/icones/Tributaria.png";
import criminal from "../../assets/icones/Criminal.png";

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
                                    <p>Família</p>
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