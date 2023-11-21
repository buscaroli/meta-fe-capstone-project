import React from 'react'
import { useState, useLayoutEffect, useEffect } from 'react'
import Review from '../Review/Review'
import styles from './Testimonials.module.css'
import { faker } from '@faker-js/faker'

const tempData = [
  {
    name: 'George',
    picUrl: '',
    rating: 4,
    review: 'Great food, would book again!',
  },
  {
    name: 'George',
    picUrl: '',
    rating: 4,
    review: 'Great food, would book again!',
  },
  {
    name: 'George',
    picUrl: '',
    rating: 4,
    review: 'Great food, would book again!',
  },
]
function Testimonials() {
  const [data, setData] = useState(tempData)

  useLayoutEffect(() => {
    let dataArray = []
    let firstName = ''
    let picUrl = ''
    let review = ''
    let rating = ''

    for (let i = 0; i < 3; i++) {
      firstName = faker.person.firstName()
      picUrl = faker.image.avatar()
      rating = Math.floor(Math.random() * 5) + 1
      review = faker.word.words({ count: { min: 15, max: 25 } })
      dataArray.push({ firstName, picUrl, rating, review })
    }
    setData(dataArray)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className={styles.container}>
      <h5 className={styles.sectionTitle}>Testimonials</h5>
      <div className={styles.reviews}>
        <div className={styles.review1}>
          <Review
            name={data[0].firstName}
            picture={data[0].picUrl}
            rating={data[0].rating}
            review={data[0].review}
          />
        </div>

        <div className={styles.review2}>
          <Review
            name={data[1].firstName}
            picture={data[1].picUrl}
            rating={data[1].rating}
            review={data[1].review}
          />
        </div>
        <div className={styles.review3}>
          <Review
            name={data[2].firstName}
            picture={data[2].picUrl}
            rating={data[2].rating}
            review={data[2].review}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
