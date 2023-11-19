import React from 'react'
import StoreDetails from '../StoreDetails/StoreDetails'
import styles from './Hero.module.css'
const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
}

function Hero({ showButton }) {
  return (
    <section className={styles.hero}>
      <div className="outerContainer">
        <div className="innerContainer">
          <StoreDetails
            title={store.title}
            city={store.city}
            description={store.description}
          />

          <div className="picture">
            <img src="#" alt="tray of food held by a waiter" />
          </div>
        </div>
        {showButton && (
          <div classsName="button" role="button">
            Reserve a Table
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
