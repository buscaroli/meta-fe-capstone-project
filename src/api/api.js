const availableTimesByDate = {
  '2023-08-29': ['10:00', '11:00', '12:00'],
  '2023-09-01': ['10:00', '11:00', '12:00'],
  '2023-09-02': ['14:00', '15:00', '16:00'],
  '2023-09-03': ['10:00', '11:00', '12:00'],
  '2023-09-04': ['14:00', '15:00', '16:00'],
  '2023-09-05': ['10:00', '11:00', '12:00'],
  '2023-09-06': ['14:00', '15:00', '16:00'],
  '2023-09-07': ['10:00', '11:00', '12:00'],
  '2023-09-08': ['14:00', '15:00', '16:00'],
  '2023-09-09': ['10:00', '11:00', '12:00'],
  '2023-09-10': ['14:00', '15:00', '16:00'],
  '2023-09-11': ['10:00', '11:00', '12:00'],
  '2023-09-12': ['14:00', '15:00', '16:00'],
  '2023-09-13': ['10:00', '11:00', '12:00'],
  '2023-09-14': ['14:00', '15:00', '16:00'],
  '2023-09-15': ['10:00', '11:00', '12:00'],
  '2023-09-16': ['14:00', '15:00', '16:00'],
  '2023-09-17': ['10:00', '11:00', '12:00'],
  '2023-09-18': ['14:00', '15:00', '16:00'],
  '2023-09-19': ['10:00', '11:00', '12:00'],
  '2023-09-20': ['14:00', '15:00', '16:00'],
}

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date])
      } else if (!availableTimesByDate[date]) {
        resolve([])
      } else {
        reject(new Error('No available times for the selected date.'))
      }
    }, 500)
  })
}

const submitAPI = ({ day, time }) => {
  console.log(
    'API - submitAPI - avaiableTimesByDate - BEFORE: ',
    availableTimesByDate
  )
  console.log('API - submitAPI - day: ', day)
  console.log('API - submitAPI - time: ', time)
  if (availableTimesByDate[day].length === 1) {
    availableTimesByDate[day] = []
  }
  availableTimesByDate[day] = availableTimesByDate[day].filter((slot) => {
    console.log('API - submitAPI loop - slot: ', slot)
    console.log('API - submitAPI loop - slot === time: ', slot === time)
    return slot !== time
  })

  console.log(
    'API - submitAPI - avaiableTimesByDate - AFTER: ',
    availableTimesByDate
  )

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (day) {
        resolve(true) // Simulate successful submission
      } else if (!day) {
        resolve(false)
      } else {
        reject(new Error('Form submission failed.'))
      }
    }, 500) // Simulate API delay
  })
}

export { fetchAPI, submitAPI }
