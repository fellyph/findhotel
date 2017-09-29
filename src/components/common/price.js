import React from 'react'

const Price = ({oldPrice, currentPrice, condition}) => (
  <div className="price">
    {!!oldPrice && <p className="old-price">{oldPrice}</p>}
    {!!currentPrice && <p className="current-price">{currentPrice}</p>}
    {!!condition && <p className="condition">{condition}</p>}
  </div>
)

export default Price