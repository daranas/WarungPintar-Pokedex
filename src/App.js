import React, { Component } from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react'
// components
import Home from '../src/pages/Home';
import Type from '../src/pages/Type';
import Detail from '../src/pages/Detail';
import Header from './components/Header';
import NavBar from './components/NavBar'
// css
import 'semantic-ui-css/semantic.min.css';
import './App.css';
// images
import logo from './assets/images/wp.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pokeWrapper">
          <Header logo={logo} />
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/type/:name" component={Type} />
              <Route exact path="/detail/:name" component={Detail} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  } 
}

export default App;
