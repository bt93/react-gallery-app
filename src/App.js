import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import './css/index.css';

// import apiKey from './config';

class App extends Component {

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
