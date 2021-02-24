import React, { Component } from 'react';
import './valores.css';
import valores from "../../assets/images/Valores3.jpg";
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
                        <img src={valores} width="100%" height="300px" alt="Imagem 0" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossos Valores</h1>
                            <p>Somos dinâmicos, abertos a novos conhecimentos e
                            acreditamos que os serviços jurídicos devem estar
                            alinhados com os interesses estratégicos e com o
                            contexto econômico de nossos clientes.
                            Cultivamos um ambiente de trabalho saudável, transparente e
                            baseado em valores como honestidade e proativade.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={missao} width="100%" height="300px" alt="Imagem 1" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossa Missão</h1>
                            <p>Prover serviços jurídicos de qualidade,
                            a fim de auxiliar os clientes a alcançar seus
                            objetivos de forma eficaz e célere, através de advogados
                            e colaboradores qualificados, dedicados as causas
                            a eles confiadas.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={visao} width="100%" height="300px" alt="Imagem 2" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <h1>Nossa Visão</h1>
                            <p>Ser um escritório com atuações empresarial e pessoal,
                            que prima pela qualidade e encontra soluções jurídicas
                            para seus clientes, proporcionando resultados que
                            excedam suas expectativas, tanto na esfera judicial
                            como na extrajudicial. Atuar e acreditar que a assessoria
                            preventiva jurídica é a melhor solução para evitar
                            litígios desnecessários.</p>
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
