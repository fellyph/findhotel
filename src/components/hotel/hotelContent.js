import React from 'react'
import PropTypes from 'prop-types'
import HotelList from './hotelList'
import SortControl from '../control/sortControl'

const HotelContent = ({handleFilter, hotels}) => (
  <div className="hotel-container">
    <SortControl handleFilter={handleFilter} />
    {!!hotels && <HotelList hotels={hotels} />}
  </div>
)

HotelContent.PropTypes = {
  handleFilter: PropTypes.func.isRequired,
  hotels: PropTypes.array.isRequired
}

export default HotelContent