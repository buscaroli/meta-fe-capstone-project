import React from 'react'
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
  findAllByTestId,
  logRoles,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import ReserveTable from '../ReserveTable/ReserveTable'
import ReserveTableDetails from './ReserveTableDetails'

test.skip('Failing test', async () => {
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

  const fname = screen.getByLabelText(/First Name/i)
  fireEvent.change(fname, { target: { value: 'John' } })

  await waitFor(() => {
    expect(fname.textContent).toBe('John')
  })
  // screen.debug()
})
