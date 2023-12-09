'use client'

import React, {useEffect} from 'react'
import {Layout, Community, MixedCard, NewLaunch, RecPlay} from '@components'
import {Cont, Left, Ele3, Ele31} from '@styles/Home/style'
//import { WalletProvider } from '@app/WalletContext'

const Home = () => {

  /*useEffect(() => {
    const connect = async () => {
      const account = await window.aptos.account();
      console.log(account);
    };
    connect();
  },
    [])

  const disconnect = async () => {
    const wallet = window?.aptos;
    try {
      const response = await wallet.disconnect();
      console.log(response);
      console.log('disconnected') // { address: string, address: string }
    } catch (error) {
      console.log('there was an error');
      console.log(error);
      // { code: 4001, message: "User rejected the request."}
    }
  }*/
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