import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Offer from './components/offer/offer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        <Offer />
      </div>
    );
  }
}

export default App;
