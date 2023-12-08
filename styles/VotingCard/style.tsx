import styled from "styled-components";

export const MainContainer = styled.div`
  background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
  margin-right: 25vw;
  margin-left: 3vw;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding-bottom: 0.5vw;
  color: #FFFFFF;
  background-color: rgb(30, 30, 30);
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:1vw 2vw;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.3vw;
  justify-self: start;
  opacity: 80%;
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
  justify-self: end;
`;

export const VotesText = styled.p`
  font-size: 1.3vw;
  opacity: 40%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  gap: 0.8vw;
  margin:0 1vw;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-left: 0.2vw;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
`;

// const SVGContainer = styled(Image)`
//     width: 4.4vw;
//     height: 4.4vw;
// `;

export const StyledImage = styled.img`
  width: 11vw;
  height: 9vw;
  border-radius: 20px;
`;

export const TitleText = styled.p`
  font-size: 1.3vw;
`;

export const SubTitleText = styled.p`
  font-size: 0.97vw;
  margin: 1vw 0;
  opacity: 50%;
`;

export const SongTitleText = styled.p`
  font-size: 1.1vw;
`;

export const SongDetailsText = styled.p`
  font-size: 0.97vw;
`;

export const VoteCountText = styled.p`
  font-size: 1.1vw;
  padding-top: 1.2vw;
`;
