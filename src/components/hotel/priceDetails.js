import React from 'react'
import Offer from '../offer/offer'
import PropTypes from 'prop-types'

const PriceDetails = ({offers}) => (
  <div className="price-details">
    {offers.map((offer, index) => (
      <Offer
        isBest={offer.isBest}
        key={index}
        hasFreeCancelation={offer}
        totalRate={offer.totalRate}
        provider={offer.provider}
      />
    ))}
  </div>
)

PriceDetails.propTypes = {
  offers: PropTypes.array
}

export default PriceDetails