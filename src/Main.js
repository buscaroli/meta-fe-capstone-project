import React from 'react'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'
import ReserveTable from './ReserveTable'

function Main() {
  return (
    <main>
      <Hero showButton={true} />
      <Specials />
      <Testimonials />
      <ReserveTable />
      <About />
    </main>
  )
}

export default Main
