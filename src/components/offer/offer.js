import React from 'react'
import Price from '../common/price'
import PropTypes from 'prop-types'

const Offer = ({hasFreeCancelation, isBest, provider, totalRate}) => (
  <div className="offer {!!isBest && 'is-best'}">
    {!!isBest && <Price />}
    {provider.name}
  </div>
)

Offer.propTypes = {
  hasFreeCancelation: PropTypes.bool,
  isBest: PropTypes.bool,
  provider: PropTypes.object,
  totalRate: PropTypes.number
}

export default Offer