'use client'

import React from 'react';
import styled from 'styled-components'; // Import styled-components or your preferred styling library

import feel from "@assets/feel.png"
import {LeftPart, NFTWrapper, ScrollableGrid, TextWrapper, TopInfoBar} from "@styles/nftDialog/style";
import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import cross from "@assets/cross.svg";
import NextImage from "next/image";

// Styled component for the scrollable container


const NFTDialog = () => {
    const nftContainers = [];

    for (let i = 0; i < 100; i++) {
        nftContainers.push(<NFTSongContainer/>);
    }

    return (
        <NFTWrapper>
            <TopInfoBar>
                <TextWrapper>
                    <h1>
                        NFT Collection:
                    </h1>
                    <h2>
                        Launched Sep 05
                    </h2>
                </TextWrapper>

                <LeftPart>
                    <p>
                        25/25 Sold
                    </p>
                    <NextImageComponent src={cross} alt="" width={48} height={48}/>
                </LeftPart>
            </TopInfoBar>
            <ScrollableGrid>
                {nftContainers.map((container, index) => (
                    <div key={index}>{container}</div>
                ))}
            </ScrollableGrid>
        </NFTWrapper>
    );
};

const NextImageComponent = styled(NextImage)``;

export default NFTDialog;
