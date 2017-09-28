import React from 'react'
import PriceDetails from './priceDetails'
import Description from './description'

const Offer = () => (
  <div className="offer">
    <figure className="Thumb">
      <img src="/img/default.jpg" />
    </figure>
    <Description />
    <PriceDetails />
  </div>
)

export default Offer
