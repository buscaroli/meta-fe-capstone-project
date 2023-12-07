import { render, screen } from '@testing-library/react'
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
