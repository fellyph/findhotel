import React from 'react'

const StarRating = ({starRating}) => {
  let stars = []
  for(let i = 0; i < 5; i++) {
    stars.push(<span className={(starRating >= i) ? 'star filled': 'star'} key={i}> ★ </span>)
  }
  return stars
}

export default StarRating