import styled from 'styled-components';
import bg from '@assets/bg.svg'; 
import  Image  from 'next/image';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/mixedCard/style'




const MixedCard = () => {
  return (
    <CardContainer>
      <CardImage src={bg} alt='' />
      <CardInfo>
        <Title>Daily Mix 2</Title>
        <Description>
          The Strokes, Gorillaz, Tame Impala and more to discover
        </Description>
      </CardInfo>
    </CardContainer>
  );
};

export default MixedCard;
