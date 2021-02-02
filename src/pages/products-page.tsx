import React, { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import ProductList from '../components/product-list'
import { Product } from '../__generated__/types'

const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      title
      image
      price
    }
  }
`

interface ProductListProps {
  products: [Product]
}

export default function ProductsPage() {
  const { loading, error, data } = useQuery<ProductListProps>(
    GET_PRODUCTS_QUERY
  )
  if (loading) return <span> Loading </span>
  if (error) return <p>{error.toString()}</p>
  if (!data?.products || !data?.products.length)
    return <p> This request returned no data. Please try again.</p>

  return (
    <Fragment>
      <Header>
        <h1>products catalog</h1>
      </Header>
      <ProductList products={data?.products} />
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
