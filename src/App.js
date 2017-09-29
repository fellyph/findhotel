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
        console.log('success',result.data)
        this.setState({
          offers: result.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount () {
    this.getOffer()
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        {!!this.state.offers && <OfferList offers={this.state.offers} />}
      </div>
    );
  }
}

export default App;
