import React from 'react'
import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './ReserveTableDetails.module.css'

function ReserveTableDetails({ fromDate, onReservationSubmit, bookings }) {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        day: '',
        time: '',
        outdoor: 'Indoor',
        occasion: 'No',
        diners: '1',
        preferences: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, 'Must be between 3 and 15 characters')
          .max(15, 'Must be between 3 and 15 characters')
          .required('Required'),
        lastName: Yup.string()
          .min(3, 'Must be between 3 and 15 characters')
          .max(20, 'Must be between 3 and 15 characters')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.number().min(
          10,
          'Too short, please also add the local code'
        ),
        day: Yup.date().required('Required'),
        time: Yup.string().required('Please select a free slot to book'),
        outdoor: Yup.string(),
        occasion: Yup.string(),
        diners: Yup.string().required(
          'Please select how many seats to reserve'
        ),
        preferences: Yup.string().max(100, 'Maximum 100 words'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('formik values: ', values)
        onReservationSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <form
          className={styles.container}
          id="reserveTableForm"
          onSubmit={formik.handleSubmit}
        >
          {/* User Details */}
          <label htmlFor="firstName" className={styles.firstNameLabel}>
            FirstName
          </label>
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps('firstName')}
            className={styles.firstNameInput}
          ></input>

          <label htmlFor="lastName" className={styles.lastNameLabel}>
            LastName
          </label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
            className={styles.lastNameInput}
          ></input>

          <label htmlFor="email" className={styles.emailLabel}>
            eMail
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={styles.emailInput}
          ></input>

          <label htmlFor="phone" className={styles.phoneLabel}>
            Mobile
          </label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
            className={styles.phoneInput}
          ></input>

          {/* User Preferences */}

          <label className={styles.dateLabel} htmlFor="day">
            Date
          </label>
          <input
            type="date"
            id="day"
            {...formik.getFieldProps('day')}
            className={styles.dateInput}
          />

          <label className={styles.timeLabel} htmlFor="time">
            Time
          </label>
          <select
            id="time"
            {...formik.getFieldProps('time')}
            className={styles.timeInput}
          >
            {bookings.time12 && <option value="time12">12:00</option>}
            {bookings.time13 && <option value="time13">13:00</option>}
            {bookings.time14 && <option value="time14">14:00</option>}
            {bookings.time17 && <option value="time17">17:00</option>}
            {bookings.time18 && <option value="time18">18:00</option>}
            {bookings.time19 && <option value="time19">19:00</option>}
            {bookings.time20 && <option value="time20">20:00</option>}
          </select>

          <label className={styles.outdoorLabel} htmlFor="outdoor">
            Position
          </label>
          <select
            id="outdoor"
            {...formik.getFieldProps('outdoor')}
            className={styles.outdoorInput}
          >
            <option value="Indoor">Indoor</option>
            <option value="Greenhouse">Greenhouse</option>
            <option value="Garden">Garden</option>
          </select>

          <label className={styles.occasionLabel} htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            {...formik.getFieldProps('occasion')}
            className={styles.occasionInput}
          >
            <option value="No">No Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Party">Party</option>
            <option value="Graduation">Graduation</option>
          </select>

          <label className={styles.dinersLabel} htmlFor="diners">
            Diners
          </label>
          <select
            id="diners"
            {...formik.getFieldProps('diners')}
            className={styles.dinersInput}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="4">Up to Four</option>
            <option value="8">Up to Eight</option>
            <option value="16">Up to Sixteen</option>
          </select>

          <label className={styles.preferencesLabel} htmlFor="preferences">
            Preferences
          </label>
          <textarea
            id="preferences"
            {...formik.getFieldProps('preferences')}
            className={styles.preferencesInput}
          />

          <button
            type="submit"
            className={styles.reserveButton}
            form="reserveTableForm"
          >
            Reserve a Table
          </button>
        </form>
      )}
    </Formik>
  )
}

export default ReserveTableDetails
