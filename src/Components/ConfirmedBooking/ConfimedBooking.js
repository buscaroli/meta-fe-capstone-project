import React from 'react'
import styles from './ConfirmedBooking.module.css'

function ConfimedBooking({ details }) {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>You have been Booked!</h2>
      <div className={styles.summary}>
        <ul className={styles.list}>
          <li className={styles.userDetail}>
            Dear {details.firstName + ' ' + details.lastName}
          </li>
          <li className={styles.userDetail}>
            a table for {details.diners}{' '}
            {details.diners > 1 ? 'people' : 'person'}
          </li>
          <li className={styles.userDetail}>has been reserved</li>
          <li className={styles.userDetail}>on the {details.day}</li>
          <li className={styles.userDetail}>at {details.time} o'clock.</li>
        </ul>
      </div>
      <h5 className={styles.goodbye}>See you soon!</h5>
    </article>
  )
}

export default ConfimedBooking
