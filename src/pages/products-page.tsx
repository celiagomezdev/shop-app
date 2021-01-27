import React, { Fragment } from 'react'
import styled from '@emotion/styled'

export default function ProductsPage() {
  return (
    <Fragment>
      <Header>
        <h1>products catalog</h1>
      </Header>
    </Fragment>
  )
}

const Header = styled('header')({
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  height: '150px',
  justifyContent: 'center',
  color: '#F72585',
  backgroundColor: '#CEE0DC',
})
