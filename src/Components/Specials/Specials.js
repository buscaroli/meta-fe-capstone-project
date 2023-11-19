import React from 'react'
import Meal from '../Meal/Meal'

function Specials() {
  return (
    <section className="container">
      <div className="topbar">
        <h5 className="sectionTitle">Specials</h5>
        <div className="button" role="button">
          On the Menu
        </div>
      </div>
      <div className="reviews">
        <Meal
          title="Greek Salad"
          price="12.99"
          picture=""
          description="Great salad, the best I ever had, it tasted great, I particularly liked the fresh olive oil."
        />
        <Meal
          title="Greek Salad"
          price="12.99"
          picture=""
          description="Great salad, the best I ever had, it tasted great, I particularly liked the fresh olive oil."
        />
        <Meal
          title="Greek Salad"
          price="12.99"
          picture=""
          description="Great salad, the best I ever had, it tasted great, I particularly liked the fresh olive oil."
        />
      </div>
    </section>
  )
}

export default Specials
