import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from "./firebase";

import Conteudo from "./components/conteudo";
import Login from "./components/login";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import New from "./components/new";
import Home from "./components/home";
import Footer from "./components/footer";
import Civel from "./components/areas/civel";
import Complience from "./components/areas/complience";
import "./global.css";
import Compliance from "./components/areas/complience";

class App extends Component {
  state = {
    firebaseInitialized: false,
  };

  componentDidMount() {
    firebase.isInitialized().then((resultado) => {
      //Devolve o usuário
      this.setState({ firebaseInitialized: resultado });
    });
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/conteudo" component={Conteudo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/new" component={New} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/civel" component={Civel} />
          <Route exact path="/complience" component={Compliance} />
        </Switch>
        <Footer />
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;
