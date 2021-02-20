import React, { Component } from 'react';
import './equipe.css';
import cristiano from "../../assets/images/Cristiano.jpeg";
import barros from "../../assets/images/Barros.jpeg";

class Equipe extends Component {

    render() {
        return (

            <div className="equipe" id="equipe">
                <div className="tituloEquipe"><h1>EQUIPE</h1></div>
                <div className="container" id="equipegeral">
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm" id="perfil">
                                    <img src={barros} width="180px" height="180px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoEquipe">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm" id="perfil">
                                    <img src={cristiano} width="180px" height="180px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoEquipe">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
