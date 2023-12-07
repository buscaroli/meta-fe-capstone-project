import React from 'react'
import { useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../../api/api'
import styles from './Reserve.module.css'
import ReserveTableDetails from '../ReserveTableDetails/ReserveTableDetails'

function ReserveTable() {
  const [reservationData, setReservationData] = useState({})
  // const [bookings, dispatch] = useReducer(updateTimes, {})
  const [selectedDay, setSelectedDay] = useState('2023-09-14')
  const [todaysFreeSlots, setTodaysFreeSlots] = useState([])

  function initializeTimes() {
    setSelectedDay('2023-09-29')
    fetchDesiredSlots()
  }

  // update today as per selected date from the date-picker
  const getEnteredDate = (day) => {
    setSelectedDay(day)
  }

  const fetchDesiredSlots = () => {
    fetchAPI(selectedDay)
      .then((x) => {
        setTodaysFreeSlots(x)
      })
      .catch((e) => {
        console.log('ReserveTable = Error fetching Free Slots: ', e)
      })
  }

  useEffect(() => {
    initializeTimes()
  }, [])

  useEffect(() => {
    fetchDesiredSlots()
  })

  const onReservationSubmit = async (data) => {
    setReservationData(data)
    console.log('ReserveTable - reservationData: ', reservationData)

    const submitted = await submitAPI(data)
    console.log('ReserveTable - submitted: ', submitted)
    fetchDesiredSlots()
  }

  return (
    <section className={styles.container}>
      <h5 data-testid="reserveTableHeading" className={styles.title}>
        Reserve a Table
      </h5>

      <ReserveTableDetails
        fromDate={selectedDay}
        onReservationSubmit={onReservationSubmit}
        todaysFreeSlots={todaysFreeSlots}
        getEnteredDate={getEnteredDate}
      />
    </section>
  )
}

export default ReserveTable
