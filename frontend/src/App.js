import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';

import { Layout } from './components/Layout';

import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              
              
              
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;