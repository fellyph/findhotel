import React from 'react'
import Price from '../common/price'

const PriceDetails = () => (
  <div className="price-details">
    <Price />

    <ul class="options">
      <li><button>Booking.com</button></li>
      <li><button>price.com</button></li>
      <li><button>7ideas.com</button></li>
    </ul>
  </div>
)

export default PriceDetails