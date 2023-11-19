import React from 'react'
import StoreDetails from './StoreDetails'

const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
}

function Hero() {
  return (
    <section class="hero">
      <div className="outerContainer">
        <div className="innerContainer">
          <StoreDetails
            title={store.title}
            city={store.city}
            description={store.description}
          />
          <div class="picture">
            <img src="#" alt="picture of a tray of food held by a waiter" />
          </div>
        </div>
        <div classsName="button" role="button">
          Reserve a Table
        </div>
      </div>
    </section>
  )
}

export default Hero
