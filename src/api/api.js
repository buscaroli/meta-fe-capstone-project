// generate an object containing the next 'numDays' dates
// with corresponding booking availability
const generateDatesFromToday = (numDays) => {
  const slotsArray = [
    [
      ['12:00', 3],
      ['13:00', 5],
      ['14:00', 3],
    ],
    [
      ['17:00', 3],
      ['18:00', 5],
      ['19:00', 3],
      ['20:00', 2],
    ],
  ]
  const date = new Date()
  let dates = {} // stores dates with daily shifts

  // takes a Date() and returns a String as 'YYYY-MM-DD'
  const calculateDate = (day) =>
    String(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`)

  let alternatingShift = true // to alternate shifts pattern

  for (let i = 0; i < numDays; i++) {
    date.setDate(date.getDate() + 1) // add one day
    let today = calculateDate(date)

    console.log('alternatingShift ', alternatingShift)
    console.log('today ', today)

    alternatingShift
      ? (dates[today] = slotsArray[0])
      : (dates[today] = slotsArray[1])
    alternatingShift = !alternatingShift
  }
  // console.log('dates ---> ', dates)
  return dates
}

let freeSlots
// simulates an API call
// if the date passed as 'YYYY-MM-DD' is in the freeSlots dictionary
// the promise will resolve returning the array with the free slots for
// that day, otherwise it will return an empty array
const fetchAPI = (date) => {
  freeSlots = generateDatesFromToday(14)
  console.log('api.js - date: ', date)
  console.log('api.js - freeSlots: ', freeSlots)
  console.log('api.js - freeSlots[date]: ', freeSlots[date])
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (freeSlots[date]) {
        resolve(freeSlots[date])
      } else if (!freeSlots[date]) {
        resolve(['Unavailable', 0])
      } else {
        reject(new Error('Could not fetch Time Slots.'))
      }
    }, 1000)
  })
}

// this is a temporary function as the official Meta API is unavailable
// in future might add the time as well and decrease the table numbers
const submitAPI = ({ date }) => {
  let canReserve = freeSlots[date] ? true : false

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canReserve) {
        resolve(true)
      } else {
        reject(new Error('Error submitting the form'))
      }
    }, 1000)
  })
}

export { fetchAPI, submitAPI }
