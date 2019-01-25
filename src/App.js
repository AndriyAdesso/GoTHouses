import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import ListAndDetails from './components/ListAndDetails/ListAndDetails';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListAndDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
