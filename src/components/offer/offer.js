import React from 'react'
import Price from '../common/price'
import PropTypes from 'prop-types'

const Offer = ({hasFreeCancelation, isBest, provider, totalRate}) => (
  <p className="offer {!!isBest && 'is-best'}">
    {!!isBest && <Price />}
    {provider.name}
  </p>
)

Offer.propTypes = {
  hasFreeCancelation: PropTypes.bool,
  isBest: PropTypes.bool,
  provider: PropTypes.object,
  totalRate: PropTypes.number
}

export default Offer