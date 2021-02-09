import React from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      <Text>{text}</Text>
    </ButtonStyled>
  )
}

const ButtonStyled = styled('button')(`
  margin: 20px 0;
  background-color: #F72585;
  padding: 10px 40px;
  border: 0px solid transparent;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #ca075f;
  };
  &:focus {
    outline:0;
  };
`)

const Text = styled('h3')({
  margin: '0',
})

export default Button
