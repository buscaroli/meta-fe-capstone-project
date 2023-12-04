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
        time: '12:00',
        outdoor: 'Indoor',
        occasion: 'No',
        diners: '1',
        preferences: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string(),
        day: Yup.date().required('Required'),
        time: Yup.string().required('Please select a free slot to book'),
        outdoor: Yup.string(),
        occasion: Yup.string(),
        diners: Yup.string().required('Select seats'),
        preferences: Yup.string(),
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
          {formik.touched.firstName && formik.errors.firstName ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '2/3',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.firstName}
            </div>
          ) : null}

          <label htmlFor="lastName" className={styles.lastNameLabel}>
            LastName
          </label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
            className={styles.lastNameInput}
          ></input>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '2/3',
                gridColumn: '10/13',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.lastName}
            </div>
          ) : null}

          <label htmlFor="email" className={styles.emailLabel}>
            eMail
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={styles.emailInput}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '4/5',
                gridColumn: '1/6',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.email}
            </div>
          ) : null}

          <label htmlFor="phone" className={styles.phoneLabel}>
            Mobile
          </label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
            className={styles.phoneInput}
          ></input>
          {formik.touched.phone && formik.errors.phone ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '4/5',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.phone}
            </div>
          ) : null}
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
          {formik.touched.day && formik.errors.day ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '6/7',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.day}
            </div>
          ) : null}

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
          {formik.touched.time && formik.errors.time ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '8/9',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.time}
            </div>
          ) : null}

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
          {formik.touched.outdoor && formik.errors.outdoor ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '10/11',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.outdoor}
            </div>
          ) : null}

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
          {formik.touched.occasion && formik.errors.occasion ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '12/13',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.occasion}
            </div>
          ) : null}

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
          {formik.touched.diners && formik.errors.diners ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '7/8',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.diners}
            </div>
          ) : null}

          <label className={styles.preferencesLabel} htmlFor="preferences">
            Preferences
          </label>
          <textarea
            id="preferences"
            {...formik.getFieldProps('preferences')}
            className={styles.preferencesInput}
          />
          {formik.touched.preferences && formik.errors.preferences ? (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                gridRow: '18/19',
                fontWeight: 'bold',
              }}
            >
              {formik.errors.preferences}
            </div>
          ) : null}

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
