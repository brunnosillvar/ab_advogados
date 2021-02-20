import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from "../../assets/images/Logo.png";
import {MenuOutlined} from '@ant-design/icons';

function Header() {
    return (
        <header id="main-header">
            <div className="container-fluid p-0">
                <nav className="navbar navbar-default navbar-expand-md navbar-fixed-top">
                <img src={logo} width="145px" height="62px" alt=""/>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuOutlined style={{ fontSize: '25px', color: '#FFF' }} />
                    </button>

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#valores">Inicio</a>
                            <a className="nav-item nav-link" href="#institucional">Institucional</a>
                            <a className="nav-item nav-link" href="#areas">Áreas de Atuação</a>
                            <a className="nav-item nav-link" href="#equipe">Equipe</a>
                            <a className="nav-item nav-link" href="/#conteudo">Conteúdo</a>
                            <a className="nav-item nav-link" href="#contato">Contato</a>
                            <Link className="nav-item nav-link" to="/login">Login</Link>
                        </div>
                    </section>
                </nav>
            </div>
        </header>
    );
}

export default Header;