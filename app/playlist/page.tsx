
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import CommunityPlaylist from '@components/communityPlaylist'
// import PlaySong from '@components/playSong'

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { NavBar, SideBar, PlaylistCard, Voting, SearchPlaylist, PlaySong, Layout } from '@components'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', height: '70vh', gap: '16px', overflowY: 'auto', scrollBehavior: 'smooth', padding: '0vh 2.8vw'}}>
        <PlaylistCard />
        <Voting/>
        <SearchPlaylist/>
      </div>
    </Layout>
  )
}

