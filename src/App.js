import React, { Component } from 'react';
import axios from 'axios'
import OfferList from './components/offer/offerList'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      offers: [],
    }
  }

  getOffer () {
    axios.get('/data/fe-challenge.json')
      .then((result) => {
        console.log('success',result)
        this.setState({offers: result})
      })
      .catch((error) => {
        console.log(error)
      })
}

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        <OfferList offers={this.getOffer()} />
      </div>
    );
  }
}

export default App;
