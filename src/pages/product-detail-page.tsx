import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Product } from '../__generated__/types'
import ProductDetail from '../components/product-detail'

interface ProductProps {
  product: Product
}

interface ParamTypes {
  productId: string
}

type ProductByIDQueryVariables = {
  productId: string
}

export default function ProductDetailPage() {
  document.title = 'Product Detail'

  const { productId } = useParams<ParamTypes>()

  const GET_PRODUCT_BY_ID_QUERY = gql`
    query GetProductById($productId: ID!) {
      product(productId: $productId) {
        id
        image
        title
        description
        color
        material
        release_date
        price
      }
    }
  `

  const { loading, error, data } = useQuery<
    ProductProps,
    Partial<ProductByIDQueryVariables>
  >(GET_PRODUCT_BY_ID_QUERY, {
    variables: { productId },
  })

  // TODO: Handle this with better UI for each case
  if (loading) return <span> Loading </span>
  if (error) return <p>{error.toString()}</p>

  return <Fragment>{data && <ProductDetail product={data.product} />}</Fragment>
}
