import React from 'react'

function StoreDetails({ title, city, description }) {
  return (
    <article className="storedetails">
      <h2>{title}</h2>
      <h4>{city}</h4>
      <p>{description}</p>
    </article>
  )
}

export default StoreDetails
