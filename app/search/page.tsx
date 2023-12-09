'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { song } from '@types'
import { Community, Layout, MixedCard } from '@components';

const SongList = ({data, search}: {data: song[]; search: string}) => {

    const filteredSongs = data.filter((song: song)  => {
        if(search === '') return song
        else if(song.name.toLowerCase().includes(search.toLowerCase())) return song
    })

    return (
        <div>
            {filteredSongs.map((song: song) => (
                <div key={song._id}>{song.name}</div>
            ))}
        </div>
    )
}

const Search = () => {
    const [search, setSearch] = useState('')
    const [songs, setSongs] = useState([])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    // useEffect(() => {
    //     const fetchSongs = async () => {
    //         const response = await fetch('/api/song');
    //         const data = await response.json()

    //         setSongs(data)
    //     }

    //     fetchSongs()
    // }, [])

    return (
        <Layout>
            <div style={{padding: '0vh 2.8vw', display: 'flex', justifyContent: 'space-between'}}>
                <div className="flex justify-between flex-col" style={{ width: '70.769vw', height: '70vh', overflowY: 'auto', gap: '1.860vh', scrollBehavior: 'smooth'}}>
                    <Community component={<MixedCard />} title='Artists' />

                    <Community component={<MixedCard />} title='Playlists' />

                    <Community component={<MixedCard />} title='Albums' />

                    <Community component={<MixedCard />} title='Profiles' />
                </div>
            </div>
        </Layout>
    )
}

export default Search