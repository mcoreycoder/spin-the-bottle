import React from 'react'
import styled from 'styled-components'
import People from '../People'

const Main = styled.main`
  padding: 16px;
`



export default () => {
  return (
    <>
      <Main>
        <People />
      </Main>
    </>
  )
}
