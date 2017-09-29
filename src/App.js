import React, { Component } from 'react';
import Offer from './components/offer/offer'
import './App.css';

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
