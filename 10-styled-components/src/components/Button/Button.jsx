import React from 'react'

import './button.css'
import styled from 'styled-components'

const color = 'royalblue'
const padding = '4rem'

const StyledButton = styled.button`
    background-color: ${color}; 
    color: #fff;
    padding: ${padding};
    &:hover{
      background-color: red;
      color: ${color};
    }
`

const Button = () => {
  return (
    <div>
      <StyledButton >click me</StyledButton>
    </div>
  )
}

export default Button
