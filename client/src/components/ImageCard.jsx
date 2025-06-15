import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Avatar } from '@mui/material';

const Card = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
        scale: 1.05;
    }
    &:nth-child(7n + 1) {
        grid-column: auto/span 2;
        grid-row: auto/span 2;
    }
`;

const HoverOverlay = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.white};
    transition: opacity 0.3s ease;
    border-radius: 6px;
    justify-content: end;
    padding: 16px;

    ${Card}:hover & {
        opacity: 1;
    }
`;
const Prompt = styled.div`
    font-weight: 400px;
    font-size: 15px;
    color: ${({ theme }) => theme.white};


`;
const Author = styled.div`
    font-weight: 600px;
    font-size: 14px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({ theme }) => theme.white};
`;

export const ImageCard = () => {
  return (
    <Card>
        <LazyLoadImage
        width="100%"
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png'/>
        <HoverOverlay>
            <Prompt>Prompt</Prompt>
            <Author>
                <Avatar sx={{ width: '32px', height: '32px'}}>R</Avatar>
                Author</Author>
        </HoverOverlay>
    </Card>
  )
}
