
import  Image  from 'next/image';
import thumbnail from '@assets/thumbnail.svg'
import {  Row, Title, TitleBlock, InfoBlock,SearchText1, SearchText2, Sno,Thumbnail,Wrap6,Wrap8, Wrap9,Wrap10} from '@styles/playlist/style';

interface TableProps {
    sno: string;
    title: string;
    artist: string;
    album: string;
    updatedAt: string;
    duration: string;
  }
  
const VotingCard: React.FC<TableProps> =({sno,title,artist,album,updatedAt,duration})=>{
    return (
        <Row>
        <TitleBlock>
            <Sno>
                <SearchText2>
                    {sno}
                </SearchText2>
            </Sno>
            <Title>
                <Thumbnail src={thumbnail} alt=''/>
                <Wrap6>
                    <SearchText1>
                        {title}
                    </SearchText1>
                    <SearchText2>
                        {artist}
                    </SearchText2>
                </Wrap6>
                
            </Title>
        </TitleBlock>
        <InfoBlock>
            <SearchText2>
                <Wrap10>
                    {album}
                </Wrap10>
            </SearchText2>
            <SearchText2>
            <Wrap10>
                    {updatedAt}
                </Wrap10>
            </SearchText2>
            <SearchText2>
            <Wrap9>
                    {duration}
                </Wrap9>
            </SearchText2>
        </InfoBlock>
    </Row>
    )
}

export default VotingCard;