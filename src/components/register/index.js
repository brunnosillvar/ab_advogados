import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

import './register.css'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e){
        e.preventDefault();

        this.onRegister();
    }

    onRegister = async () =>{
        try{
            const {nome, email, password} = this.state;

            await firebase.register(nome, email, password);

            this.props.history.replace('/dashboard/new');
        }catch(erro){
            alert(erro.message);
        }
    }

    render(){
        return(
            <div>
                <header id="new">
                    <Link to='/dashboard/new'>Voltar</Link>                    
                </header>
                <h1 className="register-h1">Novo Usuário</h1>
                <form onSubmit={this.register} id="register">
                    <label>Nome: </label><br/>
                    <input type="text" value={this.state.nome} autoFocus autoComplete="off"
                    onChange={(e)=> this.setState({nome: e.target.value})} placeholder="Digite seu nome" /><br/>

                    <label>Email: </label><br/>
                    <input type="text" value={this.state.email} autoComplete="off"
                    onChange={(e)=> this.setState({email: e.target.value})} placeholder="teste@teste.com" /><br/>

                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.password} autoComplete="off"
                    onChange={(e)=> this.setState({password: e.target.value})} placeholder="password" /><br/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);