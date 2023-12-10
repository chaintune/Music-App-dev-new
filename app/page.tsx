'use client'

import React, {useEffect} from 'react'
import {Layout, Community, MixedCard, NewLaunch, RecPlay} from '@components'
import {Cont, Left, Ele3, Ele31} from '@styles/Home/style'
//import { WalletProvider } from '@app/WalletContext'

const Home = () => {

  return (
    
      <Layout>
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
        </Cont>
</Layout>
  )
}

export default Home