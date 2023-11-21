import React from 'react'
import Hero from '../Hero/Hero'
import Specials from '../Specials/Specials'
import Testimonials from '../Testimonials/Testimonials'
import About from '../About/About'
import ReserveTable from '../ReserveTable/ReserveTable'

function Main() {
  return (
    <main>
      <Hero showButton={true} />
      <Specials />
      <Testimonials />
    </main>
  )
}

export default Main
