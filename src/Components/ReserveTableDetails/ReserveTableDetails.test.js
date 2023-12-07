import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import ReserveTable from '../ReserveTable/ReserveTable'
import ReserveTableDetails from './ReserveTableDetails'

test('Renders the correct date in the time input', async () => {
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

  const timeElement = screen.getByDisplayValue('2023-09-14')
  expect(timeElement).toBeInTheDocument()
})
