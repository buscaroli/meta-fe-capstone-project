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

const reserveButton = (
  <div
    classsName={styles.reserveButton}
    role="button"
    style={{
      backgroundColor: '#F4CE14',
      borderRadius: '16px',
      gridColumn: '3/5',
      gridRow: '7/8',
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    }}
  >
    Reserve a Table
  </div>
)

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

        {showButton && reserveButton}
      </div>
    </section>
  )
}

export default Hero
