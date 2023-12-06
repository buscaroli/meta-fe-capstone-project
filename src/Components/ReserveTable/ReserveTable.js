import React from 'react'
import { useState, useEffect, useReducer } from 'react'
import { fetchAPI } from '../../api/api'
import styles from './Reserve.module.css'
import ReserveTableDetails from '../ReserveTableDetails/ReserveTableDetails'

// const availableTimes = {
//   time12: 10,
//   time13: 6,
//   time14: 4,
//   time17: 7,
//   time18: 3,
//   time19: 2,
//   time20: 1,
// }

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'book-12':
      if (state.time12 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time12: state.time12 - 1 }
      }
      break
    case 'book-13':
      if (state.time13 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time13: state.time13 - 1 }
      }
      break

    case 'book-14':
      if (state.time14 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time14: state.time14 - 1 }
      }
      break
    case 'book-17':
      if (state.time17 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time17: state.time17 - 1 }
      }
      break
    case 'book-18':
      if (state.time18 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time18: state.time18 - 1 }
      }
      break
    case 'book-19':
      if (state.time19 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time19: state.time19 - 1 }
      }
      break
    case 'book-20':
      if (state.time20 === 0) {
        console.log('Fully Booked')
      } else {
        return { ...state, time20: state.time20 - 1 }
      }
      break
    default:
      return state
  }
}

function ReserveTable() {
  const [reservationData, setReservationData] = useState({})
  const [bookings, dispatch] = useReducer(updateTimes, {})
  const [today, setToday] = useState('2023-07-12')
  const [selectedDay, setSelectedDay] = useState('')

  function initializeTimes() {
    const date = new Date()

    const nowDate = String(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    )
    // the course's API is not working, hardcoding today's date with different slots
    // const availableTimes = availableTimes
    // setToday(availableTimes)
    setToday(nowDate)
  }

  // update today as per selected date from the date-picker
  const getEnteredDate = (day) => {
    console.log('selected date: ', day)
    setToday(day)
  }

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    initializeTimes()
    const availability = fetchAPI(selectedDay)
  }, [selectedDay])

  const onReservationSubmit = (data) => {
    setReservationData(data)
    console.log('Submitting data:\n', data)

    switch (data.time) {
      case 'time12':
        dispatch({ type: 'book-12' })
        console.log('called 12')
        break
      case 'time13':
        dispatch({ type: 'book-13' })
        console.log('called 13')
        break
      case 'time14':
        dispatch({ type: 'book-14' })
        console.log('called 14')
        break
      case 'time17':
        dispatch({ type: 'book-17' })
        console.log('called 17')
        break
      case 'time18':
        dispatch({ type: 'book-18' })
        console.log('called 18')
        break
      case 'time19':
        dispatch({ type: 'book-19' })
        console.log('called 19')
        break
      case 'time20':
        dispatch({ type: 'book-20' })
        console.log('called 20')
        break
      default:
        break
    }

    console.log('**** ReserveTable - bookings: ', bookings)
    // jump to the 'receipt page'
  }

  return (
    <section className={styles.container}>
      <h5 data-testid="reserveTableHeading" className={styles.title}>
        Reserve a Table
      </h5>

      <ReserveTableDetails
        fromDate={today}
        onReservationSubmit={onReservationSubmit}
        bookings={bookings}
        dispatch={dispatch}
        getEnteredDate={getEnteredDate}
      />
    </section>
  )
}

export default ReserveTable
