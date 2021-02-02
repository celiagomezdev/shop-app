import React from 'react'
import styled from '@emotion/styled'
import ProductCard from '../components/product-card'
import { Product } from '../__generated__/types'

interface ProductListProps {
  products: [Product]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const listOfProducts =
    products &&
    products.map(product => <ProductCard product={product} key={product.id} />)

  return (
    <ProductListContainer id="product-list-container">
      <ProductsList id="product-list">{listOfProducts}</ProductsList>
    </ProductListContainer>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const ProductListContainer = styled('section')({
  margin: '1.2rem auto',
  width: '1200px',
  textAlign: 'center',
  height: 'max-content',
})

const ProductsList = styled('div')({
  padding: '1.2rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: '#f4f8fd',
  height: '100%',
})

export default ProductList
