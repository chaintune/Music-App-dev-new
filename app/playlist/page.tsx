
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CommunityPlaylist from '@components/communityPlaylist'
import PlaySong from '@components/playSong'

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Navbar from '@components/navbar'
import Sidebar from '@components/sidebar'
import PlaylistCard from '@components/playlistCard'
import Voting from '@components/voting'
import Search from '@components/searchPlaylist'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (




    <div className='bg-zinc-950' style={{ width: '100vw' , height: 'fit-content'}} >

      <div className='overflow-none'>
        <Navbar />
        <div className="flex justify-between" style={{padding: '0vw 2.8vw'}}>
          <div>
            <PlaylistCard />
            <Voting/>
            <Search/>
          </div>
          <Sidebar />
        </div>
      </div>


      <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center'>
        {/* <PlaySong /> */}
      </div>
    </div>

  )
}

