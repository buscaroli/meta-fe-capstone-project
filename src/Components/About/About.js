import React from 'react'
import StoreDetailsAlternative from '../StoreDetailsAlternative/StoreDetailsAlternative'
import styles from './About.module.css'
import chef1 from '../../assets/chef1.jpg'
import chef2 from '../../assets/chef2.jpg'

const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    "Our great chefs Mario and Adrian love cooking traditional recipes served with a modern twist and they can't wait to welcome you on their Little Lemon Restaurant.",
}

function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <StoreDetailsAlternative
            title={store.title}
            city={store.city}
            description={store.description}
          />
        </div>

        {/* <div className={styles.pictures}> */}
        <div className={styles.pic1Container}>
          <img
            className={styles.pic1}
            src={chef1}
            alt="portrait of Adrian cooking"
          />
        </div>

        <div className={styles.pic2Container}>
          <img
            className={styles.pic2}
            src={chef2}
            alt="portrait of Adrian and Mario cooking"
          />
        </div>

        {/* </div> */}
      </div>
    </section>
  )
}

export default About
