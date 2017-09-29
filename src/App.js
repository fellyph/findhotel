import React, { Component } from 'react';
import axios from 'axios'
import HotelContent from './components/hotel/hotelContent'

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      hotels: []
    }
  }

  getHotel () {
    axios.get('/data/fe-challenge.json')
      .then((result) => {
        console.log(result.data[1])
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
    if (type === 'supplier') {
      this.sortBySupplier()
    } else if (type === 'price') {
      this.sortByPriceAsc()
    }
  }

  sortBySupplier () {
    this.setState( (prevState) => (
      this.state.hotels.sort((a, b) => (b.starRating - a.starRating))
    ))
  }

  sortByPriceAsc () {
    this.setState( (prevState) => (
      this.state.hotels.sort((a, b) => (a.offers[0].totalRate - b.offers[0].totalRate))
    ))
  }

  sortByPriceDesc () {
    this.setState( (prevState) => (
      this.state.hotels.sort((a, b) => (b.offers.totalRate - a.offers.totalRate))
    ))
  }

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
