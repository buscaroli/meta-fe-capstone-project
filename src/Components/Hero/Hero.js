import React from 'react'
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
    <section aria-label="Hero Section" id="hero" className={styles.hero}>
      <h2 className={styles.title}>{store.title}</h2>
      <h4 className={styles.city}>{store.city}</h4>
      <p className={styles.description}>{store.description}</p>

      <div className={styles.pictureContainer}>
        <img
          className={styles.picture}
          src={pic}
          alt="tray of food held by a waiter"
        />
      </div>
      <ReserveButton show={true} />
    </section>
  )
}

export default Hero
