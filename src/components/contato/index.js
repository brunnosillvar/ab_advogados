import React, { Component } from 'react';
import './contato.css';
import Iframe from 'react-iframe';
import InputMask from 'react-input-mask';



class Contato extends Component {
    render() {
        return (
            <div className="container" id="contato">
                <div className="tituloContato"><h1>CONTATO</h1></div>
                <div className="row" id="contatos">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm" id="informacoesContato">
                                    <h5>ENDEREÇO</h5>
                                    <p>Rua Isabel, 180, Penha, São Paulo - SP</p>
                                    <br />
                                    <p>Ficamos próximo à Avenida Amador Bueno da Veiga</p>
                                </div>
                                <div className="col-sm" id="informacoesContato">
                                    <h5>TELEFONE</h5>
                                    <p>(11) 93320-6463 <br />
                                    (11) 95347-1360 </p>
                                    <br />
                                    <h5>CONTATO</h5>
                                    <p>contato@contato.com.br</p>
                                </div>
                                <div className="maps">
                                    <Iframe
                                        src="https://maps.google.com/maps?q=Augusto%20e%20Barros%20Sociedade%20de%20Advogados,%20R.%20Isabel,%20180%20-%20Penha,%20S%C3%A3o%20Paulo%20-%20SP,%2003647-020&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="500"
                                        height="200"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        className="maps"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" id="form">
                        <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
                            <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" />
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                            <InputMask type="text" class="form-control" id="telefone" name="telefone" placeholder="Telefone" mask="(99) 99999-9999" maskChar=" " />
                            <textarea class="form-control" id="mensagem" rows="3" name="mensagem" placeholder="Mensagem"></textarea>
                            <input id="button" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato;