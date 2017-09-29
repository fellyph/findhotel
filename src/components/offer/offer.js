import React from 'react'
import Price from '../common/price'

const Offer = ({hasFreeCancelation, isBest, provider, totalRate}) => (
  <p className="offer {!!isBest && 'is-best'}">
    {!!isBest && <Price/>}
  </p>
)

export default Offer