import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  findAllByTestId,
  logRoles,
} from '@testing-library/react'
import React from 'react'

import { MemoryRouter as Router } from 'react-router-dom'
import ReserveTable from '../ReserveTable/ReserveTable'
import ReserveTableDetails from './ReserveTableDetails'

test('Renders the correct date in the date input', async () => {
  render(
    <Router>
      <ReserveTable
        fromDate={'2023-09-14'}
        todaysFreeSlots={['10:00', '11:00']}
      >
        <ReserveTableDetails />
      </ReserveTable>
    </Router>
  )

  const dateElement = screen.getByDisplayValue('2023-09-14')
  expect(dateElement).toBeInTheDocument()
})

test('Checks the time input is rendered', async () => {
  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails />
      </ReserveTable>
    </Router>
  )

  const timeElement = screen.getByTestId('timeId')
  expect(timeElement).toBeInTheDocument()
})

test('Checks the time input is initially empty', async () => {
  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails />
      </ReserveTable>
    </Router>
  )

  const timeElement = screen.getByTestId('timeId')
  expect(timeElement.textContent).toBe('Choose')
})

test('Checks button is initially disabled', () => {
  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails />
      </ReserveTable>
    </Router>
  )

  const btn = screen.getByTestId('reserveButton')
  expect(btn).toHaveAttribute('disabled')
})

test.skip('Checks button is enabled if firstName, lastName, email, date, time and diners are entered', async () => {
  const btnSubmit = jest.fn()
  const dateHandler = jest.fn()
  const times = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails
          fromDate={'2023-09-14'}
          todaysFreeSlots={times}
          onReservationSubmit={btnSubmit}
          getEnteredDate={dateHandler}
        />
      </ReserveTable>
    </Router>
  )
  const btn = screen.getByTestId('reserveButton')

  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  const fname = screen.getByLabelText('First Name')
  fireEvent.change(fname, { target: { value: 'Samuel' } })
  fireEvent.click(btn)
  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  const lname = screen.getByLabelText('Last Name')
  fireEvent.change(lname, { target: { value: 'Smith' } })
  await waitFor(() => {
    expect(btn).toBeDisabled()
  })
  const email = screen.getByLabelText('eMail')
  fireEvent.change(email, { target: { value: 'samuel@email.com' } })
  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  const date = screen.getByLabelText('Date')

  fireEvent.mouseOver(date)
  fireEvent.mouseMove(date)
  fireEvent.mouseDown(date)
  date.focus()
  fireEvent.change(date, { target: { value: '2023-09-12' } })
  fireEvent.mouseUp(date)
  fireEvent.click(date)

  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  const diners = screen.getByLabelText('Diners')
  fireEvent.change(diners, { target: { value: '2' } })
  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  const time = screen.getByTestId('timeId')
  fireEvent.click(time)
  fireEvent.change(time, { target: { value: '14:00' } }) // not working

  await waitFor(() => {
    expect(btn).toBeDisabled()
  })

  let optEl
  await waitFor(() => {
    optEl = screen.getAllByText(/1?:00/i)
  }, 1000)

  fireEvent.mouseOver(optEl[1])
  fireEvent.mouseMove(optEl[1])
  fireEvent.mouseDown(optEl[1])
  optEl[1].focus()
  fireEvent.mouseUp(optEl[1])
  fireEvent.click(optEl[1])

  await waitFor(() => {
    expect(btn).not.toBeDisabled()
    // expect(btn).toHaveAttribute('disabled', '')
  })
})
