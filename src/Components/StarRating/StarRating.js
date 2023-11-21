import React from 'react'
import styles from './StarRating.module.css'

function StarRating({ rating }) {
  let starString = ''
  for (let i = 0; i < rating; i++) {
    starString += '★'
  }
  return <div className={styles.stars}>{starString}</div>
}

export default StarRating
