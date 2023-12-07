import bg from '@assets/bg.svg'
import Image from 'next/image'

const mixedCard = () => {
  return (
    <>
    <div className="w-44 h-[268px] p-2 flex-col justify-start items-start inline-flex">
    <Image className="rounded-2xl backdrop-blur-[120px]" style={{width: '11.189vw', height: '11.189vw'}} src={bg} alt=''/>
      <div className="h-[92px] px-2 py-3 flex-col justify-start items-start gap-1 flex">
        <div className="text-white text-xl font-light font-['Aileron'] leading-7">Daily Mix 2</div>
        <div className="w-[152px] overflow-hidden opacity-70 text-white text-sm font-light font-['Aileron'] leading-[18px]">The Strokes, Gorillaz, Tame Impala and more to fuck bitch</div>
      </div>
    </div>
    </>
  )
}

export default mixedCard
