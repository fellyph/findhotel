import React from 'react'
import PropTypes from 'prop-types'
import Hotel from './hotel'

const HotelList = ({hotels}) => (
  <section className="hotel-list">
    {hotels.map((hotel, index) => (
      <Hotel
        key={index}
        name={hotel.name}
        guestVote={hotel.guestVote}
        placeShort={hotel.placeShort}
        images={hotel.images}
        offers={hotel.offers}
        starRating={hotel.starRating}
      />
    ))}
  </section>
)

HotelList.propTypes = {
  hotels: PropTypes.array
}

export default HotelList

