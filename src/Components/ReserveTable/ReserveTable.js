import React from 'react'
import { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Reserve.module.css'
import ReserveTableDetails from '../ReserveTableDetails/ReserveTableDetails'

const availableSlots = {
  am12: 10,
  am13: 6,
  am14: 4,
  pm17: 7,
  pm18: 3,
  pm19: 2,
  pm20: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'book-am12':
      if (state.am12 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, am12: state.am12 - 1 }
      }
      break
    case 'book-am13':
      if (state.am13 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, am13: state.am13 - 1 }
      }
      break

    case 'book-am14':
      if (state.am14 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, am14: state.am14 - 1 }
      }
      break
    case 'book-pm17':
      if (state.pm17 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, pm17: state.pm17 - 1 }
      }
      break
    case 'book-pm18':
      if (state.pm18 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, pm18: state.pm18 - 1 }
      }
      break
    case 'book-pm19':
      if (state.pm19 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, pm19: state.pm19 - 1 }
      }
      break
    case 'book-pm20':
      if (state.pm20 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, pm20: state.pm20 - 1 }
      }
      break
    default:
      return state
  }
}

function ReserveTable() {
  const [today, setToday] = useState('')

  const [reservationData, setReservationData] = useState({})
  const [bookings, dispatch] = useReducer(reducer, availableSlots)

  useEffect(() => {
    const date = new Date()
    const nowDate = String(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    )
    setToday(nowDate)

    console.log('ReerveTable - bookings: ', bookings)
  }, [])

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  const onReservationSubmit = (data) => {
    console.log('Submitting data:\n', data)
    setReservationData(data)
    navigateHome()
  }

  return (
    <section className={styles.container}>
      <h5 className={styles.title}>Reserve a Table</h5>
      <form className={styles.form} id="reserveTableForm">
        <ReserveTableDetails
          fromDate={today}
          onReservationSubmit={onReservationSubmit}
          bookings={bookings}
          dispatch={dispatch}
        />
      </form>
    </section>
  )
}

export default ReserveTable
