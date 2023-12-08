'use client'
import  Image  from 'next/image';
import Search from '@assets/search.svg'
import drop from '@assets/drop.svg'
import { CardContainer2, Wrap7, Wrap1, Options, SearchBar, DropdownButton, DropdownContainer, DropdownContent, DropdownItem,DropdownIcon, Row, Title, TitleBlock, InfoBlock,SearchText1, SearchText2, Sno} from '@styles/playlist/style';
import { useState } from 'react';
import SearchEntry from './searchEntry'
const options= ["Most Popular", "Most Recent", "Most Streamed"];
const VotingCard=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = ({option}) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
       <CardContainer2>
            <Wrap1>
                <Wrap7>
                    <Options src={Search} alt='' />
                    <SearchBar placeholder='Search...'/>
                </Wrap7>
                <DropdownContainer>
                    <DropdownButton onClick={handleDropdownToggle}>Sort by: {selectedOption || 'Select'} <DropdownIcon src={drop} alt='' /></DropdownButton>
                    {isOpen?(<DropdownContent>
                        {options.map(option => (
                        <DropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                            {option}
                        </DropdownItem>
                        ))}
                    </DropdownContent>):""}
                </DropdownContainer>
            </Wrap1>
            <Row>
                <TitleBlock>
                    <Sno>
                        <SearchText2>
                            #
                        </SearchText2>
                    </Sno>
                    <Title>
                        <SearchText1>
                            Title
                        </SearchText1>
                    </Title>
                </TitleBlock>
                <InfoBlock>
                    <SearchText2>
                        Album
                    </SearchText2>
                    <SearchText2>
                        Date Updated
                    </SearchText2>
                    <SearchText2>
                        Duration
                    </SearchText2>
                </InfoBlock>
            </Row>
            <SearchEntry sno="01" title="Feel it Still" artist="Portugal, The Men" album="Woodstock" updatedAt='2 Days Ago' duration='2:43'/>
            <SearchEntry sno="01" title="Feel it Still" artist="Portugal, The Men" album="Woodstock" updatedAt='2 Days Ago' duration='2:43'/>
            <SearchEntry sno="01" title="Feel it Still" artist="Portugal, The Men" album="Woodstock" updatedAt='2 Days Ago' duration='2:43'/>
            <SearchEntry sno="01" title="Feel it Still" artist="Portugal, The Men" album="Woodstock" updatedAt='2 Days Ago' duration='2:43'/>
       </CardContainer2>
    )
}

export default VotingCard;