import React, { Component } from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react'

// components
import Home from '../src/pages/Home';
import Search from './components/SearchBar'

// css
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setFilters: []
    };
  }

  render() {
    return (
      <Router>
        <div className="pokeWrapper">
          <Container>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home filterList={this.state.setFilters} />}
              />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  } 
}

export default App;
