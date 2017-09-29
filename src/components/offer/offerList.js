import React from 'react'
import PropTypes from 'prop-types'
import Offer from './offer'

const OfferList = ({offers}) => (
  <section className="offers-list">
    {offers.map((offer, index) => (
      <Offer key={index}/>
    ))}
  </section>
)

OfferList.propTypes = {
  offers: PropTypes.array
}

export default OfferList

