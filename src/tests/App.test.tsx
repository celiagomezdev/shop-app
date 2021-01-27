import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders shop app header', () => {
  render(<App />)
  const headerElement = screen.getByText(/product list/i)
  expect(headerElement).toBeInTheDocument()
})
