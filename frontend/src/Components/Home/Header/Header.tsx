import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <ButtonWrapper>
          <SignIn></SignIn>
          <SignUp></SignUp>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header


const Container = styled.div`
  
`