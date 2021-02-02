import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import ProductCard from '../components/product-card'

const dummyProduct = {
  title: 'Unbranded Rubber Hat',
  image: 'https://picsum.photos/id/1/400/300',
  price: '400,00',
}

export default function ProductsPage() {
  return (
    <Fragment>
      <Header>
        <h1>products catalog</h1>
      </Header>
      <ProductCard product={dummyProduct} />
    </Fragment>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const Header = styled('header')({
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  height: '150px',
  justifyContent: 'center',
  color: '#F72585',
  backgroundColor: '#CEE0DC',
})
