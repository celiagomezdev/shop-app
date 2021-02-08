import React from 'react'
import styled from '@emotion/styled'
import ShoppingCartImg from '../assets/shopping-cart.svg'

const ShoppingCart: React.VoidFunctionComponent = () => {
  return (
    <Button id="shopping-cart" aria-label="Shopping Cart">
      <ImageWrapper id="image-wrapper">
        <Image src={ShoppingCartImg} alt="Shopping Cart" />
      </ImageWrapper>
      <Badge id="badge"></Badge>
    </Button>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const ImageWrapper = styled('div')({
  height: '45px',
})

const Image = styled('img')({
  height: '100%',
})

const Button = styled('button')({
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
  position: 'absolute',
  top: '60px',
  right: '50px',
})

const Badge = styled('div')({
  backgroundColor: '#F72585',
  height: '15px',
  width: '15px',
  borderRadius: '50%',
  zIndex: 99,
  position: 'relative',
  top: '-45px',
  right: '-36px',
})

export default ShoppingCart
