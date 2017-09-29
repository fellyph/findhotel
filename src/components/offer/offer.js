import React from 'react'
import PriceDetails from './priceDetails'
import Description from './description'
import Thumb from '../common/thumb'

const Offer = () => (
  <div className="offer">
    <Thumb />
    <Description />
    <PriceDetails />
  </div>
)

export default Offer
