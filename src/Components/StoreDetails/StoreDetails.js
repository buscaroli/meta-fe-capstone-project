import React from 'react'
import styles from './StoreDetails.module.css'

function StoreDetails({ title, city, description }) {
  return (
    <article className={styles.storeDetails}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.city}>{city}</h4>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default StoreDetails
