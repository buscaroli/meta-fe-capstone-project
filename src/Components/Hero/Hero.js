import React from 'react'
import StoreDetails from '../StoreDetails/StoreDetails'
import styles from './Hero.module.css'
import pic from '../../assets/restaurantfood.jpg'
import ReserveButton from '../ReserveButton/ReserveButton'

const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
}

function Hero() {
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
        <ReserveButton show={true} />
      </div>
    </section>
  )
}

export default Hero
