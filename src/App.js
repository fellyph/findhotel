import React, { Component } from 'react';
import axios from 'axios'
import HotelContent from './components/hotel/hotelContent'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      hotels: [],
      hotelsSortByPriceAsc : [],
      hotelsSortByPriceDesc : []
    }
  }

  getHotel () {
    axios.get('/data/fe-challenge.json')
      .then((result) => {
        console.log('success',result.data)
        this.setState({
          hotels: result.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount () {
    this.getHotel()
  }

  sortByPriceAsc () {
    this.setState(prevState => {
      this.state.hotels.sort((hotela,hotelb) => (hotela.offers.price - hotelb.offers.price))
    })
  }

  sortByPriceDesc () {
    this.setState(prevState => {
      this.state.hotels.sort((hotela,hotelb) => (hotelb.offers.price - hotela.offers.price))
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        <HotelContent handleFilter={this.sortByPriceAsc()} hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
