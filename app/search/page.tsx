'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { song } from '@/types'

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

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await fetch('/api/song');
            const data = await response.json()

            setSongs(data)
        }

        fetchSongs()
    }, [])

    return (
        <div>
            <br />
            <input type="text" value={search} onChange={handleSearchChange} />

            <br /><br /><br />

            <SongList 
                data={songs}
                search={search}
            />
        </div>
    )
}

export default Search