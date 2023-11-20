import React from 'react'
import Meal from '../Meal/Meal'
import styles from './Specials.module.css'
import bruschetta from '../../assets/bruschetta.png'
import salad from '../../assets/greekSalad.jpg'
import dessert from '../../assets/lemonDessert.jpg'

function Specials() {
  return (
    <section className={styles.container}>
      <div className={styles.topBar}>
        <h5 className={styles.sectionTitle}>Specials</h5>
        <div className={styles.menuButton} role="button">
          On the Menu
        </div>
      </div>
      <div className={styles.reviews}>
        <Meal
          title="Greek Salad"
          price="12.99"
          picture={bruschetta}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <Meal
          title="Bruschetta"
          price="5.99"
          picture={salad}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <Meal
          title="Lemon Dessert"
          price="5.00"
          picture={dessert}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  )
}

export default Specials
