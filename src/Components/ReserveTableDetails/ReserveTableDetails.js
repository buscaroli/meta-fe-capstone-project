import React from 'react'
import { useState, useEffect } from 'react'
import styles from './ReserveTableDetails.module.css'

function ReserveTableDetails({ fromDate, fromTime }) {
  // effects
  useEffect(() => {
    // console.log('today is ', fromDate)
    // console.log('now is ', fromTime)
    // console.log('outdoor is ', outdoor)
    // console.log('occasion is ', occasion)
    // console.log('diners is ', diners)
    // console.log('peferences is ', preferences)
  })

  // State
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [outdoor, setOutdoor] = useState('Indoor')
  const [occasion, setOccasion] = useState('No')
  const [diners, setDiners] = useState('1')
  const [preferences, setPreferences] = useState('')

  // input handles
  const handleFirstName = (e) => {
    if (firstName.length < 3 || firstName.length > 16) {
      e.target.setCustomValidity('Between 3 and 16 letters.')
    } else {
      e.target.setCustomValidity('')
    }
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    if (lastName.length < 3 || lastName.length > 16) {
      e.target.setCustomValidity('Between 3 and 16 letters.')
    } else {
      e.target.setCustomValidity('')
    }
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleDate = (e) => {
    setDay(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleOutdoor = (e) => {
    setOutdoor(e.target.value)
  }

  const handleOccasion = (e) => {
    setOccasion(e.target.value)
  }

  const handleDiners = (e) => {
    setDiners(e.target.value)
  }

  const handlePreferences = (e) => {
    setPreferences(e.target.value)
  }

  return (
    <article className={styles.container}>
      {/* User Details */}
      <label htmlFor="firstNameInput" className={styles.firstNameLabel}>
        FirstName
      </label>
      <input
        type="text"
        id="firstNameInput"
        value={firstName}
        onChange={handleFirstName}
        required
        pattern="\w{3,16}"
        className={styles.firstNameInput}
      ></input>

      <label htmlFor="lastNameInput" className={styles.lastNameLabel}>
        LastName
      </label>
      <input
        type="text"
        id="lastNameInput"
        value={lastName}
        onChange={handleLastName}
        required
        pattern="\w{3,16}"
        className={styles.lastNameInput}
      ></input>

      <label htmlFor="emailInput" className={styles.emailLabel}>
        eMail
      </label>
      <input
        type="email"
        id="emailInput"
        value={email}
        onChange={handleEmail}
        required
        className={styles.emailInput}
      ></input>

      <label htmlFor="phoneInput" className={styles.phoneLabel}>
        Mobile
      </label>
      <input
        type="tel"
        id="phoneInput"
        value={phone}
        onChange={handlePhone}
        className={styles.phoneInput}
      ></input>

      {/* User Preferences */}

      <label className={styles.dateLabel} htmlFor="dateInput">
        Date
      </label>
      <input
        type="date"
        id="dateInput"
        value={day}
        min={fromDate}
        onChange={handleDate}
        required
        className={styles.dateInput}
      />

      <label className={styles.timeLabel} htmlFor="timeInput">
        Time
      </label>
      <input
        type="time"
        id="timeInput"
        value={time}
        min={fromTime}
        required
        pattern="[0-9]{2}:[0-9]{2}"
        onChange={handleTime}
        className={styles.timeInput}
      />

      <label className={styles.outdoorLabel} htmlFor="outdoorInput">
        Position
      </label>
      <select
        name="outdoorInput"
        id="outdoorInput"
        value={outdoor}
        onChange={handleOutdoor}
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
        value={occasion}
        onChange={handleOccasion}
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
        value={diners}
        onChange={handleDiners}
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
      <textarea
        id="preferencesInput"
        value={preferences}
        onChange={handlePreferences}
        className={styles.preferencesInput}
      />

      <button className={styles.reserveButton} form="reserveTableForm">
        Reserve a Table
      </button>
    </article>
  )
}

export default ReserveTableDetails
