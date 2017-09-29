import React from 'react'
import Offer from '../offer/offer'

const PriceDetails = ({offers}) => (
  <div className="price-details">
    <Offer />

    <ul className="options">
      <li><button>Booking.com</button></li>
      <li><button>price.com</button></li>
      <li><button>7ideas.com</button></li>
    </ul>
  </div>
)

export default PriceDetails