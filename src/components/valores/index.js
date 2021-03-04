import React, { Component } from 'react';
import './valores.css';
import valores from "../../assets/images/Valores4.png";
import valoresmobile from "../../assets/images/Valores4M.png";
import missao from "../../assets/images/Missao.jpg";
import visao from "../../assets/images/Visao.jpg";

class Valores extends Component {

    render() {
        return (

            <section className="carousel slide" id="carouselSection" data-ride="carousel" data-interval="3000">
                <ol className="carousel-indicators">
                    <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselSection" data-slide-to="1" ></li>
                    <li data-target="#carouselSection" data-slide-to="2" ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={valores} width="100%" height="300px" alt="Imagem 0" id="desktop" className="desktop" />
                        <img src={valoresmobile} width="100%" height="300px" alt="Imagem 0" id="mobile" className="mobile" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossos Valores</h1>
                            <p>Ética e transparência: É inegociável, como base 
                                o relacionamento pessoal e profissional. Humanismo:
                                é necessário observar os anseios comuns. 
                                Qualidade: Obrigação primária em todos os negócios. 
                                Resultados: apresentar soluções esperadas. Simples: Sempre.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={missao} width="100%" height="300px" alt="Imagem 1" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossa Missão</h1>
                            <p>Prover serviços jurídicos de qualidade, a fim de 
                                auxiliar os clientes a alcançar seus objetivos de 
                                forma célere, simples e eficaz, através de advogados 
                                e colaboradores altamente qualificados. </p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={visao} width="100%" height="300px" alt="Imagem 2" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossa Visão</h1>
                            <p>Prestar serviços jurídicos em todo o território nacional, 
                                primando pela qualidade dos serviços e buscando a melhor 
                                solução para os nossos clientes, proporcionando 
                                resultados que excedam suas expectativas, tanto 
                                na esfera judicial como na extrajudicial.</p>
                        </div>
                    </div>
                    <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                    <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Valores;
