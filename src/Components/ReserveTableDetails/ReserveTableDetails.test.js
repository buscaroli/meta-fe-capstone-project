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
import userEvent from '@testing-library/user-event'
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

test('Checks button is enabled if firstName, lastName, email, date and time are entered', async () => {
  const onReservationSubmit = jest.fn()
  // const dateHandler = jest.fn()
  const times = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails
          fromDate={'2023-09-14'}
          todaysFreeSlots={times}
          onReservationSubmit={onReservationSubmit}
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

  fireEvent.click(btn)
  await waitFor(() => {
    expect(onReservationSubmit).not.toHaveBeenCalled()
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

  await waitFor(() => {
    userEvent.selectOptions(time, ['15:00'])
  })

  // await waitFor(() => {
  //   expect(btn).toBeDisabled()
  // })

  await waitFor(() => {
    expect(btn).not.toBeDisabled()
    // expect(btn).toHaveAttribute('disabled', '')
  })
  await waitFor(() => {
    userEvent.click(btn)
  })

  // await waitFor(() => {
  //   expect(onReservationSubmit).toHaveBeenCalledTimes(1)
  // })
  // screen.debug()
})
