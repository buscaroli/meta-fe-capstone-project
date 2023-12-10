import React from 'react'
import Hero from '../Hero/Hero'
import Specials from '../Specials/Specials'
import Testimonials from '../Testimonials/Testimonials'
import About from '../About/About'
import ReserveTable from '../ReserveTable/ReserveTable'

function Main() {
  return (
    <main id="main" aria-label="main content">
      <Hero showButton={true} />
    </main>
  )
}

export default Main
