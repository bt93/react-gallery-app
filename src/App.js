import React, {Component} from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

// CSS
import './css/index.css';

import apiKey from './config';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" />
            <Route path={'/search/:searchName'} component={PhotoContainer}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
