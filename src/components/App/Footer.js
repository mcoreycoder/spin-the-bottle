import React from 'react'
import styled from 'styled-components'

const Footer = styled.header`
  border: solid red;
  background: powderblue;
  color: black;
  text-align: center;
  display: none; //this hides the Footer
`
export default () => (
  <Footer>
    <h5>Hope you enjoyed the game!</h5>
    <p>Please enjoy other games from our Team</p>
  </Footer>
)