import React from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Components/Hero/Hero'
import ConfirmedBooking from '../Components/ConfirmedBooking/ConfimedBooking'

function RouteConfirmBookingPage() {
  const location = useLocation()

  const details = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    day: location.state.day,
    time: location.state.time,
    diners: location.state.diners,
    email: location.state.email,
  }
  return (
    <>
      <Hero />
      <ConfirmedBooking details={details} />
    </>
  )
}

export default RouteConfirmBookingPage
