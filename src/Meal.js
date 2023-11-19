import React from 'react'

function Meal({ title, price, picture, description }) {
  return (
    <article>
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="portrait">
        <img src={picture} alt="picture of meal" />
      </div>
      <div className="description">{description}</div>
    </article>
  )
}

export default Meal
