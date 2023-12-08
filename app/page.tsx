import Navbar from '@components/NavBar/NavBar'
import React from 'react'
import PlaySong from '@components/playSong'
import Sidebar from '@components/sidebar'
import Community from '@components/community'
import MixedCard from '@components/mixedCard'
import NewLaunch from '@components/newLaunch'
import RecPlay from '@components/recPlay'
import {Cont, Left, Ele3, Ele31} from '@styles/Home/style'

const Home = () => {
  return (
    <div>
        <Navbar />

        <Cont>
          <Left>

            <NewLaunch />

            <Ele3>
              <Ele31></Ele31>

              <RecPlay />
            </Ele3>

            <Community component={<MixedCard />} title='Communitites you can join' />
            
            <Community component={<MixedCard />} title='Artist Corner' />

            <Community component={<MixedCard />} title='Recommended Playlists' />

            <Community component={<MixedCard />} title='Trending Community Playlists' />

            <Community component={<MixedCard />} title='Weekly Mixes' />

          </Left>

          <Sidebar />
        </Cont>

        <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center'>
          <PlaySong />
        </div>
    </div>
  )
}

export default Home
