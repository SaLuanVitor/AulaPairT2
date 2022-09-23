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
  color:red;
  width: 3rem;
}


p{
 color: pink;
 border: solid;

  background-color:blue;

}
p{
  color: pink;
}
`

export default function App() {
  return (
    <Header>

      <h1>Oi pessoal!!!!!</h1>
      <p>Saudações turma 02</p>

      <h1>Fazendo trabalho em grupo</h1>
      <p>Vamos ver no que vai dar.</p>

    </Header>
  )
}
