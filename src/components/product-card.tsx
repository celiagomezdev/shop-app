import React from 'react'
import styled from '@emotion/styled'

interface ProductCardProps {
  product: {
    title: string
    image: string
    price: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardContainer className="product-card">
      <ImgContainer className="image-container">
        <Img src={product.image} alt={`${product.title}`} />
      </ImgContainer>
      <CopyContainer className="copy-container">
        <Title className="title">{product.title}</Title>
        <Price className="price">
          {product.price ? `${product.price}€` : ''}
        </Price>
      </CopyContainer>
    </ProductCardContainer>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const ProductCardContainer = styled('div')({
  cursor: 'pointer',
  height: '300px',
  width: '350px',
  backgroundColor: '#333333',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 0.2rem 1.5rem',
})

const ImgContainer = styled('div')({
  height: '80%',
  overflow: 'hidden',
})

const Img = styled('img')({
  width: '100%',
})

const CopyContainer = styled('div')({
  margin: '1rem 0',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

const Title = styled('h3')({
  margin: '0 0 0.5rem',
})

const Price = styled('p')({
  margin: '0',
})

export default ProductCard
