import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
          <Route exact path="/" component={SearchForm} />
          <Nav />
          <Route exact path={'/search/:searchName'} component={PhotoContainer}/>
          <Route component={NotFound} />
        </div>
      </Router>
    );
  }
}

export default App;
