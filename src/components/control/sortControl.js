import React from 'react'
import PropTypes from 'prop-types'

const SortControl = ({handleFilter}) => (
  <label className="filter">
    Sort by
    <select onChange={handleFilter}>
      <option value="price-supplier">Best Supplier & Price</option>
      <option value="price">Best Price</option>
      <option value="supplier">Best Supplier</option>
    </select>
  </label>
)

SortControl.propTypes = {
  handleFilter: PropTypes.func.isRequired
}

export default SortControl
