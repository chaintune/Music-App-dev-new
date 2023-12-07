
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CommunityPlaylist from '@/components/communityPlaylist'
import PlaySong from '@/components/playSong'

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (




    <div className='bg-zinc-950' style={{ width: '100%' }} >

      <div className='overflow-auto'>
        <Navbar />
        <div className="flex justify-around" style={{ marginRight: '20px' }}>
          <div>
            <CommunityPlaylist />
            <CommunityPlaylist />
            <CommunityPlaylist />
            <CommunityPlaylist />
          </div>
          <Sidebar />
        </div>
      </div>


      <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center'>
        <PlaySong />
      </div>
    </div>

  )
}

