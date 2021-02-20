import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';

import './dashboard.css';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: localStorage.nome
        };

        this.logout = this.logout.bind(this)
    }

    async componentDidMount(){
        if(!firebase.getCurrente()){
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info) => {
            localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }

    logout = async () => {
        await firebase.logout()
        .catch((error) => {
            console.log(error);
        })

        localStorage.removeItem("nome");

        this.props.history.push('/')
    }

    render(){
        return(
            <div id="dashboard">
                <div className="user-info">
                    <h1>Olá {this.state.nome}</h1>
                    <Link to='/dashboard/new'>Novo Post</Link>
                </div> 
                <p>Logado com: {firebase.getCurrente()}</p>
                <button onClick={() => this.logout()}>Logout</button><br></br>
                <Link to="/register">Ainda não possuo uma conta</Link>
            </div>
        );
    }
}

export default withRouter(Dashboard)