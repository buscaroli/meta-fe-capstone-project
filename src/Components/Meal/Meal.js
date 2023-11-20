import React from 'react'
import styles from './Meal.module.css'
import deliveryIcon from '../../assets/Basket.svg'

function Meal({ title, price, picture, description }) {
  return (
    <article className={styles.container}>
      <div className={styles.mealPictureContainer}>
        <img
          src={picture}
          alt="meal available to buy"
          className={styles.mealPicture}
        />
      </div>

      <div className={styles.titleAndPriceContainer}>
        <div className={styles.mealTitle}>{title}</div>
        <div className={styles.mealPrice}>${price}</div>
      </div>

      <div className={styles.mealDescription}>{description}</div>

      <div className={styles.textAndIconContainer}>
        <p className={styles.orderText}>Order a Delivery</p>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src={deliveryIcon}
            alt="stylized motorbike for delivery"
          />
        </div>
      </div>
    </article>
  )
}

export default Meal
