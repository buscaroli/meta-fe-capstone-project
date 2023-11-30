import React from 'react'
import styles from './Reserve.module.css'
import ReserveTableDetails from '../ReserveTableDetails/ReserveTableDetails'

function ReserveTable() {
  return (
    <section className={styles.container}>
      <h5 className={styles.title}>Reserve a Table</h5>
      <form className={styles.form} id="reserveTableForm">
        <ReserveTableDetails />
      </form>
    </section>
  )
}

export default ReserveTable
