
import MixedCard from './mixedCard'
import './playlist.css'
import Image from 'next/image'
import arrow from '@assets/arrow.svg'

const communityPlaylist = () => {
  
  return (

    <>
    <div className='container mx-auto mb-2  relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px]' style={{height:"340px",width:"1012px"}}>
        <div className="flex justify-between items-center">
            <p className=" pl-4 pt-4 pb-2 text-white text-2xl font-light font-['Aileron'] leading-loose">Community Playlists</p>
            
            <div className="w-12 h-12 rounded-full border border-white border-opacity-5 backdrop-blur-[120px] mr-4 flex justify-center items-center" style={{background: 'linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%)'}}>
              <Image src={arrow} alt="" style={{width: '0.9vw', height: '0.9vw'}} />
            </div>
        </div>
        <div className="container scroll-smooth overflow-auto mx-auto my-auto bg-zinc-800 bg-opacity-40 rounded-2xl backdrop-blur-[120px] justify-start items-start inline-flex" style={{width:"992px"}} >
          {/* Map cards here */}
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            <MixedCard/>
            
            
        </div>
    </div>
    </>
  )
}

export default communityPlaylist