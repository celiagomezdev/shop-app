import styled from '@emotion/styled'

const Header = () => {
  return (
    <HeaderStyled>
      <h1>products catalog</h1>
    </HeaderStyled>
  )
}

/**
 * STYLED COMPONENTS OF THIS FILE:
 */

const HeaderStyled = styled('header')({
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  height: '150px',
  justifyContent: 'center',
  color: '#F72585',
  backgroundColor: '#CEE0DC',
})

export default Header
