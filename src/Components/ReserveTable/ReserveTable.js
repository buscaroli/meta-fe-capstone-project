import React from 'react'
import styles from './Reserve.module.css'
import UserDetails from '../UserDetails/UserDetails'

function ReserveTable() {
  return (
    <section className={styles.container}>
      <h5 className={styles.title}>Reserve a Table</h5>
      {/* <div className={styles.userDetails}> */}
      <UserDetails />
      {/* </div> */}

      <div className="userPreferences">User Preferences</div>
    </section>
  )
}

export default ReserveTable
