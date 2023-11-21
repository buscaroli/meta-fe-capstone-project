import React from 'react'
import styles from './UserDetails.module.css'
function UserDetails() {
  return (
    <article className={styles.container}>
      <label htmlFor="firstNameInput" className={styles.firstNameLabel}>
        FirstName
      </label>
      <input
        type="text"
        id="firstNameInput"
        className={styles.firstNameInput}
      ></input>

      <label htmlFor="lastNameInput" className={styles.lastNameLabel}>
        LastName
      </label>
      <input
        type="text"
        id="lastNameInput"
        className={styles.lastNameInput}
      ></input>

      <label htmlFor="emailInput" className={styles.emailLabel}>
        eMail
      </label>
      <input type="email" id="emailInput" className={styles.emailInput}></input>

      <label htmlFor="phoneInput" className={styles.phoneLabel}>
        Mobile
      </label>
      <input type="tel" id="phoneInput" className={styles.phoneInput}></input>
    </article>
  )
}

export default UserDetails
