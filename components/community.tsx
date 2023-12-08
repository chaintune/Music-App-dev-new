'use client'
import React from 'react'
import MixedCard from './mixedCard'
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, Image, PlaylistContainer, BadaContainer } from "@styles/communityPlaylist/style"

const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;

const Community = ({ component, title }: { component: React.ReactNode, title: string }) => {
  return (
    <Container>
      <FlexContainer>
        <Title>{title}</Title>
        <RoundedButton>
          <NextImageComponent src={arrow} alt="" width={12} height={12} />
        </RoundedButton>
      </FlexContainer>
      <PlaylistContainer>
        {component}
        {component}
        {component}
        {component}
        {component}
        {component}
        {component}
        {component}
        {component}
        {component}
      </PlaylistContainer>
    </Container>
  )
}

export default Community