import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import Home from './components/home';
import Login from './components/login';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Register from './components/register';
import New from './components/new';
import './global.css';

class App extends Component{

  state = {
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado =>{
      //Devolve o usuário
      this.setState({firebaseInitialized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/dashboard/new" component={New}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    )
  }
}

export default App;
