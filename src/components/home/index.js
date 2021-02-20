import React, { Component } from 'react';
import './home.css';
import Conteudo from '../conteudo/index';
import Valores from '../valores/index';
import Institucional from '../institucional/index';
import Areas from '../areas/index';
import Equipe from '../equipe/index';
import Contato from '../contato/index';

class Home extends Component {

    render() {
        return (
                <div className="home">
                    <Valores/>
                    <Institucional/>
                    <Areas/>
                    <Equipe/>
                    <Conteudo/>
                    <Contato/>
                </div>   
        );
    }
}

export default Home;
