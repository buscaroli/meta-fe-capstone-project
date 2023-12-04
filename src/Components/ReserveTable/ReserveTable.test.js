import { render, screen } from '@testing-library/react'
import ReserveTable from './ReserveTable'

test('Renders the heading', () => {
  render(<ReserveTable />)

  const headingElement = screen.getByTestId('reserveTableHeading')
  expect(headingElement).toBeInTheDocument()
})

test('Checks the heading has the correct text', () => {
  render(<ReserveTable />)

  const correctText = 'Reserve a Table'
  const headingElement = screen.getByTestId('reserveTableHeading')
  expect(headingElement).toHaveTextContent(correctText)
})
