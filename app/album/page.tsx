"use client"

import SongCard from "@components/SongCard/songCard";
import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import NFTDialog from "@components/NFTDialog/NftDialog";
import {Layout, SearchPlaylist} from "@components";
import React, {useState} from 'react';
import {AlbumWrapper} from "@styles/nftDialog/style";


export default function Home() {

    const [isOpen, setIsOpen] = useState(true);

    const closeDialog = () => {
        setIsOpen(false);
    };
    const openDialog = () => {
        setIsOpen(true);
    }


    return (
        <Layout>
            <AlbumWrapper>
                <SongCard/>

                {
                    isOpen && <NFTDialog close={closeDialog}/>
                }

                <SearchPlaylist/>

            </AlbumWrapper>

        </Layout>
    );
}