'use client'


import { Ele32, Ele321, Ele322, Rec_play, Rec_name } from '@styles/recPlay/style'
import { Cont, Left, Ele3, Ele31, } from '@styles/Home/style'
import CurrentPlaylistProps from "@components/CurrentPlaylistCard/CurrentPlaylistCard";
import CurrentPlaylistItem from '@components/CurrentPlaylistItem/CurrentPlaylistItem';
import React, {useState, useEffect} from 'react'
const playlistData = {
    title: 'My Awesome Playlist',
    author: {
        title: 'John Doe',
        url: 'https://example.com/johndoe',
    },
    numSongs: 10,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9125.jpg',
    onClick: () => {
        // Handle click event if needed
    },
};
/*const playlistItemData = {
    index: 1,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    title: 'Song Title',
    artists: ['Artist 1', 'Artist 2'],
    albumName: 'Album Name',
    duration: 180, // in seconds
};*/
const CurrentSong = ({ search }: { search: string }) => {
const songData = [
    {
      index: 1,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Blinding Lights',
      artists: ['The Weekend', ''],
      albumName: '',
      duration: 180,
    },
    {
      index: 2,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Shape of You',
      artists: ['Ed Sheeran', ''],
      albumName: '',
      duration: 210,
    },
    // Add more songs up to index 10 with random data
    {
      index: 3,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Someone You Loved',
      artists: ['Lewis Capaldi', ''],
      albumName: '',
      duration: 190,
    },
    {
      index: 4,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Sunflower',
      artists: ['Post Malone ', ''],
      albumName: '',
      duration: 200,
    },
    {
      index: 5,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Dance Monkey',
      artists: ['Tones and I', ''],
      albumName: '',
      duration: 220,
    },
    {
      index: 6,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'One Dance',
      artists: ['Drake', ''],
      albumName: '',
      duration: 195,
    },
    {
      index: 7,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'As It Was',
      artists: ['Harry Styles', ''],
      albumName: '',
      duration: 205,
    },
    {
      index: 8,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Starboy',
      artists: ['The Weeknd', ''],
      albumName: '',
      duration: 225,
    },
    {
      index: 9,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Stay',
      artists: ['The Kid Laroi ', ''],
      albumName: '',
      duration: 185,
    },
    {
      index: 10,
      thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', // Replace with real thumbnail URL
      title: 'Rcockstar',
      artists: ['Post Malone', ''],
      albumName: '',
      duration: 230,
    },
  ];

  const [filteredSongs, setFilteredSongs] = useState(songData);

  useEffect(() => {
    // Filter songs based on search text and update the state

    console.log('Search Value:', search);
    const filtered = songData.filter((song) =>
      song.title && search ? song.title.toLowerCase().includes(search.toLowerCase()) : true
    );
    setFilteredSongs(filtered);
  }, [search]);


    return (
        <div>
            <Ele31 style={{ width: '70.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Ele321>Top Results</Ele321>
                <div style={{ width: '70.5vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '15vw' }}>   <CurrentPlaylistProps    {...playlistData} /></div>
                    <Ele322 style={{ width: '45vw', height: '32vh' }}>
                    {filteredSongs.map((song) => (
                    <CurrentPlaylistItem key={song.index} {...song} />
                    ))}
                    </Ele322>
                </div>


            </Ele31>
        </div>
    )
}

export default CurrentSong
