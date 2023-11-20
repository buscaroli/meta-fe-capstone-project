import React from 'react'

function Review({ name, picture, rating, review }) {
  return (
    <article>
      <div className="rating">{rating}</div>
      <div className="picture">
        <img src={picture} alt="portrait of user leaving review" />
      </div>
      <div className="name">{name}</div>
      <div className="review">{review}</div>
    </article>
  )
}

export default Review
