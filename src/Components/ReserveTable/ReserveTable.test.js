import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import ReserveTable from './ReserveTable'

test('Renders the heading', () => {
  render(
    <Router>
      <ReserveTable />
    </Router>
  )

  const headingElement = screen.getByTestId('reserveTableHeading')
  expect(headingElement).toBeInTheDocument()
})

test('Checks the heading has the correct text', () => {
  render(
    <Router>
      <ReserveTable />
    </Router>
  )

  const correctText = 'Reserve a Table'
  const headingElement = screen.getByTestId('reserveTableHeading')
  expect(headingElement).toHaveTextContent(correctText)
})
