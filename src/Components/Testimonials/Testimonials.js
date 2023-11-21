import React from 'react'
import Review from '../Review/Review'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className={styles.container}>
      <h5 className={styles.sectionTitle}>Testimonials</h5>
      <div className={styles.reviews}>
        <div className={styles.review1}>
          <Review
            name="George"
            picture=""
            rating="5"
            review="Great food and staff, I really enjoyed my meal and will definetely come back."
          />
        </div>

        <div className={styles.review2}>
          <Review
            name="George"
            picture=""
            rating="5"
            review="Great food and staff, I really enjoyed my meal and will definetely come back."
          />
        </div>
        <div className={styles.review3}>
          <Review
            name="George"
            picture=""
            rating="5"
            review="Great food and staff, I really enjoyed my meal and will definetely come back."
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
