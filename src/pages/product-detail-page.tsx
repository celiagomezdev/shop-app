import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Product } from '../__generated__/types'
import { convertDate, capitalizeFirstChar } from '../utils'
import Button from '../components/button'

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

  const listItem = (label: string, data: string) => {
    return (
      <ListItem>
        <Label>{label}:</Label>
        <Data>{data}</Data>
      </ListItem>
    )
  }

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

  return (
    <Fragment>
      {data && (
        <ProductContainer id="product-container">
          <MainDataContainer id="main-data-container">
            <ImgContainer
              src={data.product.image!}
              id="detail-img-container"
            ></ImgContainer>
            <Title id="detail-title">{data.product.title}</Title>
            <Description id="detail-description">
              {data.product.description}
            </Description>
          </MainDataContainer>
          <DetailsContainer id="details-container">
            {listItem('Color', capitalizeFirstChar(data.product.color))}
            {listItem('Material', data.product.material!)}
            {listItem('Release Date', convertDate(data.product.release_date))}
            {listItem('Price', `${data.product.price}€`)}
          </DetailsContainer>
          <Button
            text="Add to cart"
            onClick={() => console.log("I've been clicked")}
          ></Button>
        </ProductContainer>
      )}
    </Fragment>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const ProductContainer = styled('section')({
  width: '700px',
  height: 'max-content',
  margin: '40px auto',
  backgroundColor: '#f4f8fd',
})

const MainDataContainer = styled('div')({
  width: '100%',
  height: 'max-content',
})

const ImgContainer = styled('img')({
  marginTop: '1.5rem',
  width: '100%',
  height: '300px',
  objectFit: 'none',
  objectPosition: 'center',
})

const Title = styled('h1')({
  paddingTop: '1rem',
  width: '100%',
  textAlign: 'center',
})

const Description = styled('h3')({
  width: '100%',
  textAlign: 'center',
  paddingBottom: '1rem',
})

const DetailsContainer = styled('div')({
  padding: '2rem 0',
  width: '100%',
  height: 'max-content',
  backgroundColor: 'white',
  border: '4px solid #f4f8fd',
})

const ListItem = styled('div')({
  width: '100%',
  height: 'max-content',
  display: 'flex',
})

const Label = styled('p')({
  fontWeight: 'bold',
  margin: '0.5rem 0',
  textAlign: 'right',
  width: '47%',
})

const Data = styled('p')({
  margin: '0.5rem 0',
  marginLeft: '2rem',
  textAlign: 'left',
  flexGrow: 1,
})
