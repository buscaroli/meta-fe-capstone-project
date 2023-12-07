import {
  render,
  screen,
  fireEvent,
  waitFor,
  findAllByTestId,
} from '@testing-library/react'
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
  expect(timeElement.textContent).toBe('')
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
  render(
    <Router>
      <ReserveTable>
        <ReserveTableDetails
          fromDate={'2023-09-14'}
          todaysFreeSlots={['10:00', '11:00']}
          onReservationSubmit={btnSubmit}
        />
      </ReserveTable>
    </Router>
  )

  const btn = screen.getByTestId('reserveButton')
  const fname = screen.getByLabelText('First Name')
  const lname = screen.getByLabelText('Last Name')
  const email = screen.getByLabelText('eMail')
  const date = screen.getByLabelText('Date')
  const time = screen.getByLabelText('Time')
  const diners = screen.getByLabelText('Diners')
  const optionElement = await screen.findByText(/16:00/i)
  const options = await screen.findAllByTestId('timeOptionTest')

  fireEvent.change(fname, { target: { value: 'Samuel' } })
  fireEvent.change(lname, { target: { value: 'Smith' } })
  fireEvent.change(email, { target: { value: 'samuel@email.com' } })

  fireEvent.focus(date)
  fireEvent.change(date, { target: { value: '2023-09-15' } })
  fireEvent.blur(date)

  fireEvent.focus(time)
  fireEvent.blur(time)

  fireEvent.click(diners)
  fireEvent.change(diners, { target: { value: '1' } })
  fireEvent.blur(diners)

  fireEvent.click(optionElement)

  fireEvent.click(options[0])

  fireEvent.click(btn)

  console.log('******')
  console.log(date.value, time.value, options.value)

  await waitFor(() => {
    expect(btnSubmit).toHaveBeenCalled()
  })
})
