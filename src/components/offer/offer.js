import React from 'react'
import Price from '../common/price'
import PropTypes from 'prop-types'
import {FormattedNumber} from 'react-intl'

const Offer = ({hasFreeCancelation, isBest, provider, totalRate}) => (
  <div className={!!isBest ? 'offer is-best' : 'offer'}>
    {isBest && <Price totalRate={totalRate} hasFreeCancelation={hasFreeCancelation} />}
    {isBest && <button className="btn">{provider.name}</button>}
    {!isBest && provider.name}
    {!isBest && <FormattedNumber value={totalRate} currency="EUR" style="currency" />}
  </div>
)

Offer.propTypes = {
  hasFreeCancelation: PropTypes.object,
  isBest: PropTypes.bool,
  provider: PropTypes.object,
  totalRate: PropTypes.number
}

export default Offer