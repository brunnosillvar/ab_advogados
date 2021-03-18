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
import Compliance from "./components/areas/complience";
import Criminal from "./components/areas/criminal";
import Empresarial from "./components/areas/empresarial";
import Familia from "./components/areas/familia";
import Imobiliario from "./components/areas/imobiliario";
import Trabalhista from "./components/areas/trabalhista";
import Tributario from "./components/areas/tributario";
import "./global.css";

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
          <Route exact path="/compliance" component={Compliance} />
          <Route exact path="/criminal" component={Criminal} />
          <Route exact path="/empresarial" component={Empresarial} />
          <Route exact path="/familia" component={Familia} />
          <Route exact path="/imobiliario" component={Imobiliario} />
          <Route exact path="/trabalhista" component={Trabalhista} />
          <Route exact path="/tributario" component={Tributario} />
        </Switch>
        <Footer />
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;
