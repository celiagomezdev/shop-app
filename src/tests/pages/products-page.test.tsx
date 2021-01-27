import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductsPage from '../../pages/products-page'

test('renders products list header', () => {
  render(<ProductsPage />)
  const headerElement = screen.getByText(/products catalog/i)
  expect(headerElement).toBeInTheDocument()
})
