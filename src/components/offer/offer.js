import React from 'react'
import PriceDetails from './priceDetails'
import Description from './description'
import Thumb from '../common/thumb'
import PropTypes from 'prop-types'

const Offer = ({name, images, placeShort, reviewCount, startRating, guestVote, offers}) => (
  <div className="offer">
    <Thumb images={images} />
    <Description name={name} placeShort={placeShort} reviewCount={reviewCount} startRating={startRating} guestVote={guestVote} />
    <PriceDetails offers={offers} />
  </div>
)


Offer.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  startRating: PropTypes.number,
  placeShort: PropTypes.string,
  reviewCount: PropTypes.number,
  offers: PropTypes.array
}

export default Offer
