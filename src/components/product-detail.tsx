import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styled from '@emotion/styled'
import { Product } from '../__generated__/types'
import { convertDate, capitalizeFirstChar } from '../utils'
import { addItemToCart } from '../store/actions'
import Button from './button'

interface ProductProps {
  product: Product
}

const connector = connect(null, { addItemToCart })

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & ProductProps

const ProductDetail: React.FC<Props> = ({ product, addItemToCart }) => {
  const listItem = (label: string, data: string) => {
    return (
      <ListItem>
        <Label>{label}:</Label>
        <Data>{data}</Data>
      </ListItem>
    )
  }

  const handleAddItemToCart = (item: Product) => addItemToCart(item)

  return (
    <ProductDetailContainer id="product-detail-container">
      <MainDataContainer id="main-data-container">
        <ImgContainer
          src={product.image!}
          id="detail-img-container"
        ></ImgContainer>
        <Title id="detail-title">{product.title}</Title>
        <Description id="detail-description">{product.description}</Description>
      </MainDataContainer>
      <DetailsContainer id="details-container">
        {listItem('Color', capitalizeFirstChar(product.color))}
        {listItem('Material', product.material!)}
        {listItem('Release Date', convertDate(product.release_date))}
        {listItem('Price', `${product.price}€`)}
      </DetailsContainer>
      <Button
        text="Add to cart"
        onClick={() => handleAddItemToCart(product)}
      ></Button>
    </ProductDetailContainer>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const ProductDetailContainer = styled('section')({
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

export default connector(ProductDetail)
