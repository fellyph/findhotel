import React, { Component } from 'react';
import axios from 'axios'
import HotelContent from './components/hotel/hotelContent'

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      hotels: [],
      hotelsSortByPrice : [],
      hotelsSortBySupplier : [],
      mapping : {
        sortBySupplier : 'supplier',
        sortByPriceAsc : 'price',
        sortByPriceAndSupplier : 'price-supplier'
      }
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

  sortBy (e) {
    const type = e.target.value
    this.setState(prevState => {
      this[this.state.mapping[type]]
    })
  }

  sortBySupplier = () => (
    this.state.hotels.sort((hotela,hotelb) => (hotela.starRating - hotelb.starRating))
  )

  sortByPriceAsc  = () => (
    this.state.hotels.sort((hotela,hotelb) => (hotela.offers.totalRate - hotelb.offers.totalRate))
  )

  sortByPriceDesc = () => (
    this.state.hotels.sort((hotela,hotelb) => (hotelb.offers.totalRate - hotela.offers.totalRate))
  )

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        <HotelContent
          handleFilter={(e) => this.sortBy(e)}
          hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
