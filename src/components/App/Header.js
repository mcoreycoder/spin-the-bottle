import React from 'react'
import styled from 'styled-components'

const HeaderNavigation = styled.header`
  border: solid red;
  background: powderblue;
  color: black;
  text-align: center
`

// export default () => <HeaderNavigation /> //modified to below

export default () => (
  <HeaderNavigation>Spin The Bottle</HeaderNavigation>
)