import React from 'react'
import styles from './Reserve.module.css'
import UserDetails from '../UserDetails/UserDetails'
import UserPreferences from '../UserPreferences/UserPreferences'

function ReserveTable() {
  return (
    <section className={styles.container}>
      <h5 className={styles.title}>Reserve a Table</h5>
      <form className={styles.form} action="">
        <UserDetails />
        <UserPreferences />
      </form>
      <button className={styles.reserveButton}>Reserve a Table</button>
    </section>
  )
}

export default ReserveTable
