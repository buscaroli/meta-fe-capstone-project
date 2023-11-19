import React from 'react'

function StoreDetails({ title, city, description }) {
  return (
    <div className="storedetails">
      <h2>{title}</h2>
      <h4>{city}</h4>
      <p>{description}</p>
    </div>
  )
}

export default StoreDetails
