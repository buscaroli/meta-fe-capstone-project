import React from 'react'
import StoreDetails from '../StoreDetails/StoreDetails'

const store = {
  title: 'Little Lemon',
  city: 'Chicago',
  description:
    'Our great chefs Mario and Adrian love cooking traditional recipes served with a modern twist.',
}

function About() {
  return (
    <section>
      <div className="container">
        <StoreDetails
          title={store.title}
          city={store.city}
          description={store.description}
        />
        <div className="pictures">
          <div className="pic">
            <img src="#" alt="portrait of Adrian cooking" />
          </div>
          <div className="pic">
            <img src="#" alt="portrait of Adrian and Mario cooking" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
