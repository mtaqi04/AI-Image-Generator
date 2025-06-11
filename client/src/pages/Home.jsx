import React from 'react'
import styled from 'styled-components'

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  text-align: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  text-align: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;


const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding: 6px 10px;
  }
`;

export const Home = () => {
  return ( <Container>
    <Headline>Explore Popular Posts in the Community!
      <Span>Generated with AI</Span>
    </Headline>

    </Container>
  )
}
