import React from 'react'
import PropTypes from 'prop-types'
import StarRating from '../common/starRating'

const Description = ({name, placeShort, reviewCount, starRating, guestVote}) => (
  <div className="description">
    <h2 className="title">{name}</h2>
    <p className="rating">
      <StarRating starRating={starRating} />
    </p>
    <p className="location">{placeShort}</p>
    <p className="refer">:) {guestVote}</p>
    <ul className="key-words">
      <li>Amazing SPA</li>
      <li>Good Food</li>
      <li>Great Location</li>
      <li>Perfect Wifi</li>
    </ul>
  </div>
)

Description.propTypes = {
  name: PropTypes.string,
  placeShort: PropTypes.string,
  reviewCount: PropTypes.number,
  guestVote: PropTypes.number
}

export default Description
