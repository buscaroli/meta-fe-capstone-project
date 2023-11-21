import React from 'react'
import styles from './UserPreferences.module.css'

function UserPreferences() {
  return (
    <article className={styles.container}>
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
    </article>
  )
}

export default UserPreferences
