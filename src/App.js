import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

// CSS
import './css/index.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search/cats"/>} />
          <Route path={'/search/:query'} component={PhotoContainer}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
