import React from 'react'
import Hero from '../Components/Hero/Hero'
import ReserveTable from '../Components/ReserveTable/ReserveTable'

function RouteReservePage() {
  return (
    <>
      <Hero showButton={false} />
      <ReserveTable />
    </>
  )
}

export default RouteReservePage
