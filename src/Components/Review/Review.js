import React from 'react'
import styles from './Review.module.css'
import StarRating from '../StarRating/StarRating'

function Review({ name, picture, rating, review }) {
  return (
    <article aria-label="Customer Review" className={styles.container}>
      <div className={styles.ratingContainer}>
        <h6 className={styles.ratingText}>Rating:</h6>
        <StarRating rating={rating} />
      </div>

      <div className={styles.pictureContainer}>
        <img
          className={styles.picture}
          src={picture}
          alt="portrait of user leaving review"
        />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.review}>{review}</div>
    </article>
  )
}

export default Review
