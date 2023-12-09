"use client"

import SongCard from "@components/SongCard/songCard";
import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import NFTDialog from "@components/NFTDialog/NftDialog";
import {Layout, SearchPlaylist} from "@components";
import React, {useState} from 'react';
import {AlbumWrapper} from "@styles/nftDialog/style";


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const closeDialog = () => {
        setIsOpen(false);
    };
    const openDialog = () => {
        setIsOpen(true);
    }


    return (
        <Layout>
            <div style={{padding: '0vh 2.8vw', display: 'flex', justifyContent: 'space-between'}}>
                <div className="flex justify-between flex-col" style={{ width: '70.769vw', height: '70vh', overflowY: 'auto', gap: '1.860vh', scrollBehavior: 'smooth'}}>
                <AlbumWrapper>
                <SongCard/>

                {
                    isOpen && <NFTDialog close={closeDialog}/>
                }

                <SearchPlaylist/>

            </AlbumWrapper>

                </div>
            </div>
        </Layout>
    );
}