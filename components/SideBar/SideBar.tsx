"use client"

import styled from 'styled-components';
import  Image  from 'next/image';
import bg from '@assets/bg.svg';
import arr2 from '@assets/arr2.svg';
import {SidebarContainer, CircleButton, Title, ContentContainer, ItemContainer, ItemBackground, ItemText,ItemDetails,ItemImage,ItemIndicator,QueueTitle} from "@styles/sidebar/style";

const SideBar = () => {
  return (
    <SidebarContainer>
      <CircleButton>
        <Image src={arr2} alt="no" />
      </CircleButton>
      <Title>Library</Title>
      <ContentContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
      </ContentContainer>
      <QueueTitle>Queue</QueueTitle>
    </SidebarContainer>
  );
};

export default SideBar;
