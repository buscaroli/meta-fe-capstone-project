import React from 'react'
import Review from './Review'

function Testimonials() {
  return (
    <section>
      <h5 className="sectionTitle">Testimonials</h5>
      <div className="reviews">
        <Review
          name="George"
          picture=""
          rating="5"
          review="Great food and staff, I really enjoyed my meal and will definetely come back."
        />
        <Review
          name="George"
          picture=""
          rating="5"
          review="Great food and staff, I really enjoyed my meal and will definetely come back."
        />
        <Review
          name="George"
          picture=""
          rating="5"
          review="Great food and staff, I really enjoyed my meal and will definetely come back."
        />
      </div>
    </section>
  )
}

export default Testimonials
