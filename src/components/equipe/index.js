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
                                    <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan 
                                        disputationi eu sit. Vide electram sadipscing et per. 
                                        Interessantiss quisso pudia ce receita de bolis, mais bolis 
                                        eu num gostis. Praesent malesuada urna nisi, quis volutpat 
                                        erat hendrerit non. Nam vulputate dapibus. Quem num gosta di 
                                        mim que vai caçá sua turmis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm" id="perfil">
                                    <img src={cristiano} width="180px" height="180px" alt="" />
                                </div>
                                <div className="col-sm" id="paragrafoEquipe">
                                    <p>Interagi no mé, cursus quis, vehicula ac nisi. 
                                        Detraxit consequat et quo num tendi nada. Nullam volutpat 
                                        risus nec leo commodo, ut interdum diam laoreet. Sed non 
                                        consequat odio. Suco de cevadiss deixa as pessoas mais 
                                        interessantis.</p>
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
