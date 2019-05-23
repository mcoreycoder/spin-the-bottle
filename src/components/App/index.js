import React from 'react'
import styled from 'styled-components'
import People from '../People'
import Header from './Header'
import Footer from './Footer'

const Main = styled.main`
  padding: 16px; 
  border: solid green;
`

// added Header and Foooter below

export default () => {
  return (
    <>
      <Main>
        <Header/>
        <People/>
        <Footer/>
      </Main>
    </>
  )
}
