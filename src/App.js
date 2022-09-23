import React from 'react'
import styled from 'styled-components'

const Header = styled.header`

width: 100vw;
height: 30vh;
background-color:pink;
display: flex;
justify-content: center;
align-items: center;
border:dashed 3px red;

h1{
  color:white;
  background-color:blue;
}
`

export default function App() {
  return (
    <Header>
      <h1>Oi pessoal!!!!!</h1>  
    </Header>
  )
}
