import React from 'react'
import StoreDetails from '../StoreDetails/StoreDetails'
import styles from './Hero.module.css'
import pic from '../../assets/restaurantfood.jpg'

const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
}

function Hero({ showButton }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <StoreDetails
          title={store.title}
          city={store.city}
          description={store.description}
        />

        <div className={styles.pictureContainer}>
          <img
            className={styles.picture}
            src={pic}
            alt="tray of food held by a waiter"
          />
        </div>

        {showButton && (
          <div classsName={styles.button} role="button">
            Reserve a Table
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
