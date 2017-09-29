import React from 'react'
import {FormattedNumber} from 'react-intl'
import PropTypes from 'prop-types'

const Price = ({oldPrice, totalRate, hasFreeCancelation}) => (
  <div className="price">
    {!!oldPrice && <FormattedNumber className="old-price" value={totalRate} currency="EUR" style="currency" />}
    <p className="current-price"><FormattedNumber value={totalRate} currency="EUR" style="currency" /></p>
    {!!hasFreeCancelation && <p className="condition">Free Cancellation</p>}
  </div>
)

Price.propTypes = {
  oldPrice: PropTypes.number,
  totalRate: PropTypes.number.isRequired,
  hasFreeCancelation: PropTypes.object
}

export default Price
