import React, { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
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

  return <Fragment>{data && <ProductList products={data.products} />}</Fragment>
}
