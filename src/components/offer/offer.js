import React, {Component} from 'react'

class Offer extends Component {
  render() {
    return (
      <div className="Offer">
        <figure>
          <img src="/img/photo.jpg" />        
        </figure>
        <div className="description">
          <h2>Quentin Amsterdam Hotel</h2>
          <ul className="stars">
            <li>*</li>
            <li>*</li>
            <li>*</li>
            <li>*</li>
            <li>*</li>
          </ul>
          <p className="location">120m to city</p>
          <p className="refer">:)</p>
          <ul class="key-words">
            <li>Amazing SPA</li>
            <li>Good Food</li>
            <li>Great Location</li>
            <li>Perfect Wifi</li> 
          </ul>
        </div>
        
        <div className="price">
          <p className="old-price">£100</p>
          <p className="current-price">£99</p>
          <p className="condition">Free Cancellation</p>

          <ul class="options">
            <li><button>Booking.com</button></li>
            <li><button>price.com</button></li>
            <li><button>7ideas.com</button></li>
          </ul>         
        </div>
      </div>    
    )
  }
}

export default Offer
