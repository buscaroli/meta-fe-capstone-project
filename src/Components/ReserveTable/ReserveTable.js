import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Reserve.module.css'
import ReserveTableDetails from '../ReserveTableDetails/ReserveTableDetails'

function ReserveTable() {
  const [today, setToday] = useState('')
  const [timeNow, setTimeNow] = useState('')
  const [reservationData, setReservationData] = useState({})

  useEffect(() => {
    const date = new Date()
    const nowDate = String(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    )
    setToday(nowDate)

    const nowTime = String(`${date.getHours()}:${date.getMinutes()}}`)
    setTimeNow(nowTime)
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
          fromTime={timeNow}
          onReservationSubmit={onReservationSubmit}
        />
      </form>
    </section>
  )
}

export default ReserveTable
