
import  Image  from 'next/image';
import {CardContainer, Wrap1, Wrap4, Header, VoteCount, Options, OptionsWrap, VotingContainer, VotingCardText1, VotingCardText2, AwardWrap, Award, CardContainer2, Wrap7} from "@styles/playlist/style";
import expand from '@assets/expand.svg'
import vote from '@assets/votes.png'
import VotingCard from '../votingCard';
const Voting=()=>{
    return (
        <CardContainer2>
            <Wrap1>
                <Header>
                    Community Voting
                </Header>
                <Wrap4>
                    <VoteCount>
                        235 Votes Received
                    </VoteCount>
                    <OptionsWrap>
                        <Options src={expand} alt=''/>
                    </OptionsWrap>
                </Wrap4>
            </Wrap1>
            <Wrap7>
                <VotingContainer>
                    <Wrap1>
                        <AwardWrap>
                            <Award src={vote} alt=''/>
                        </AwardWrap>
                        <VotingCardText1>
                            Next Voting Round in 1d:23h:48m
                        </VotingCardText1>
                    </Wrap1>
                    <VotingCardText2>
                        Top 3 songs from the list will be added to the playlist when this round ends. Learn More
                    </VotingCardText2>
                </VotingContainer>
                <VotingCard/>
                <VotingCard/>
            </Wrap7>
        </CardContainer2>
    )
}

export default Voting;