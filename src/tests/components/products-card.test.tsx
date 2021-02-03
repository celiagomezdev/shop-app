import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '../../components/product-card'

const productMock = {
  id: '4',
  image: 'http://lorempixel.com/640/480/business',
  price: '685.00',
  title: 'Practical Steel Bacon',
}

beforeEach(() => {
  render(<ProductCard product={productMock} />)
})

describe('Product Card Component', () => {
  it('renders elements properly from given product', () => {
    const titleElement = screen.getByText(/practical steel bacon/i)
    const imageElement = screen.getByAltText(/practical steel bacon/i)
    const priceElement = screen.getByText(/685.00/i)

    expect(titleElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
  })

  it('has the proper image for given product', () => {
    const imageElement = screen.getByAltText(/practical steel bacon/i)
    expect(imageElement).toHaveAttribute(
      'src',
      'http://lorempixel.com/640/480/business'
    )
  })
})
