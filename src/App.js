import React, { Component } from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react'

// components
import Home from '../src/pages/Home';

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
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                Sidebar
              </Grid.Column>
  
              <Grid.Column mobile={16} tablet={8} computer={12}>
                <Container>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => <Home filterList={this.state.setFilters} />}
                    />
                  </Switch>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    );
  } 
}

export default App;
