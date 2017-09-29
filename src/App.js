import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      offers: [],
    }
  }

  getOffer () {
    return (e) => {
      axios.get('https://drive.google.com/file/d/0B-cd6ovbirHacFN0UlpDRzY0dWs/view')
        .then((result) => {
          this.setState({offers: result})
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
      </div>
    );
  }
}

export default App;
