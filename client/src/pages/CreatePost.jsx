import React from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm'
import GeneratedImageCard from '../components/GeneratedImageCard'

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  width: 100%;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const CreatePost = () => {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm />
        <GeneratedImageCard loading/>
      </Wrapper>
    </Container>
  )
}
