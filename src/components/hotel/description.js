import React from 'react'
import PropTypes from 'prop-types'

const Description = ({name, placeShort, reviewCount, startRating, guestVote}) => (
  <div className="description">
    <h2 className="title">{name}</h2>
    <ul className="stars">
      <li className="filled">*</li>
      <li className="filled">*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
    </ul>
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
