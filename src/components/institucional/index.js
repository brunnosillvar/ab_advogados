import React, { Component } from 'react';
import './institucional.css';
import escritorio from "../../assets/images/escritorio.jpeg";

class Institucional extends Component {

    render() {
        return (

            <div className="institucional" id="institucional">
                <div className="tituloInst"><h1>INSTITUCIONAL</h1></div>
                <div class="container" id="conteudoInst">
                    <div className="row">
                        <div className="col-sm">
                            <p>Somos a inovação da advocacia.
                            Por anos a cultura da advocacia brasileira foi no sentido de administrar as demandas isoladamente de seus clientes. Em muitos casos, sequer atualizam seus clientes dos processos que estão sob sua guarda.
                            Nós da Augusto e Barros Sociedade de Advogados viemos a remodelar esta mentalidade, oferecendo serviços personalizados, com a atenção necessário a quem nos confia o seu conflito.
                            Trabalhamos com ferramentas e profissionais competentes trazendo o cliente para o nosso dia a dia, prestando o serviço de advocacia de forma humanizada. Isto é, o cliente em primeiro lugar.
                            Em que pese o advogado ser o responsável de cada ato praticado no processo, deve ele sempre ouvir o cliente antes de tomar uma decisão no processo. Além do mais, temos o dever de atualizar o cliente de cada ato, assim como estar disponível para consultas de andamentos processuais de forma urbanizada. A Augusto e Barros nasceu com a ideia de revolucionar o atendimento ao cliente;
                            Somos fiéis aos valores que nos orientam desde o início de nossas atividades, valores individuais, conjuntos e complementares, combinados à tradição do serviço de advocacia juntamente com as necessidades dos momentos atuais, resultando em uma visão ampla e abrangente, capaz de atender os requisitos legais atuais e futuros dos nossos clientes no exercício diário da advocacia dos negócios.
                            Empenhamo-nos em traduzir com precisão, objetividade e racionalidade científica, produzindo aos nossos clientes o bem estar e confiabilidade de nossos serviços, entregando-lhes os serviços jurídicos contratados de forma concreta e transparente.
                            Com esta mentalidade, buscamos sempre um atendimento eficaz, justo e objetivo na solução de problemas em todos as áreas do Direito.
                            Nossa missão é eliminar a burocracia e certos formalismos, atuando de forma ética e transparente na avaliação do que é oportuno e necessário.
                        Somos a inovação.</p>
                        </div>
                        <div className="col-sm" id="imgEscritorio">
                        <img src={escritorio} width="200px" height="200px" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Institucional;
