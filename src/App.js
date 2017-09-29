import React, { Component } from 'react';
import axios from 'axios'
import HotelList from './components/hotel/hotelList'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      hotels: [],
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

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Findhotel</h1>
        </header>
        {!!this.state.hotels && <HotelList hotels={this.state.hotels} />}
      </div>
    );
  }
}

export default App;
