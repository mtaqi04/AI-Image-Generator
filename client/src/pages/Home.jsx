import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  displlay: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding: 6px 10px;
  }
`;

export const Home = () => {
  return ( <Container>
    <Headline>Explore Popular Posts in the Community!</Headline>
    
    </Container>
  )
}
