import React from 'react'
import styles from './ReserveTableDetails.module.css'

function ReserveTableDetails() {
  return (
    <article className={styles.container}>
      {/* User Details */}
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

      {/* User Preferences */}

      <label className={styles.dateLabel} htmlFor="dateInput">
        Date
      </label>
      <input type="date" id="dateInput" className={styles.dateInput} />

      <label className={styles.timeLabel} htmlFor="timeInput">
        Time
      </label>
      <input type="time" id="timeInput" className={styles.timeInput} />

      <label className={styles.outdoorLabel} htmlFor="outdoorInput">
        Position
      </label>
      <select
        name="outdoorInput"
        id="outdoorInput"
        className={styles.outdoorInput}
      >
        <option value="Indoor">Indoor</option>
        <option value="Greenhouse">Greenhouse</option>
        <option value="Garden">Garden</option>
      </select>

      <label className={styles.occasionLabel} htmlFor="occasionInput">
        Occasion
      </label>
      <select
        name="occasionInput"
        id="occasionInput"
        className={styles.occasionInput}
      >
        <option value="No">No Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Wedding">Wedding</option>
        <option value="Party">Party</option>
        <option value="Graduation">Graduation</option>
      </select>

      <label className={styles.dinersLabel} htmlFor="dinersInput">
        Diners
      </label>
      <select
        name="dinersInput"
        id="dinersInput"
        className={styles.dinersInput}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="4">Up to Four</option>
        <option value="8">Up to Eight</option>
        <option value="16">Up to Sixteen</option>
      </select>

      <label className={styles.preferencesLabel} htmlFor="preferencesInput">
        Preferences
      </label>
      <textarea id="preferencesInput" className={styles.preferencesInput} />

      <button className={styles.reserveButton} form="reserveTableForm">
        Reserve a Table
      </button>
    </article>
  )
}

export default ReserveTableDetails
