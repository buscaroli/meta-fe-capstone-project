import React from 'react'
import styles from './StoreDetailsAlternative.module.css'

function StoreDetailsAlternative({ title, city, description }) {
  return (
    <article className={styles.storeDetails}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.city}>{city}</h4>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default StoreDetailsAlternative
