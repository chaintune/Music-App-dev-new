import Image from "next/image";
import bg from '@assets/bg.svg'
import arr2 from '@assets/arr2.svg'

const Sidebar = () => {
    return (
        <div className="scroll-smooth w-[328px] h-[640px] relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px]">
            <div className="w-12 h-12 left-[272px] top-[8px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px] flex items-center justify-center">
                <Image src={arr2} alt="no" />
            </div>
            <div className="left-[20px] top-[16px] absolute text-white text-2xl font-light font-['Aileron'] leading-loose">Library</div>
            <div className="left-[8px] top-[64px] absolute flex-col justify-start items-start gap-2 inline-flex overflow-y-auto h-[500px] hide-scrollbar"> {/* Adjust height as needed */}
                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>
                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1"> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-16 relative mb-1 "> {/* This is the container div */}
                    <div className="w-[312px] h-16 relative">
                        <div className="w-[312px] h-16 left-0 top-0 absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]" />
                        <div className="left-[70px] top-[10px] absolute text-white text-base font-light font-['Aileron'] leading-normal">Daily Mix 2</div>
                        <div className="left-[70px] top-[36px] absolute text-white text-xs font-light font-['Aileron'] leading-[18px]">Playlist • Made by ChainTune</div>
                        <Image className="w-14 h-14 left-[4px] top-[4px] absolute rounded-xl border backdrop-blur-[120px]" src={bg} alt=""/>
                        <div className="w-5 h-5 left-[276px] top-[22px] absolute">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                    </div>
                </div>

                
                {/* Add more divs as needed */}
            </div>
            <div className="left-[104px] top-[16px] absolute opacity-30 text-white text-2xl font-['Aileron'] leading-loose">Queue</div>
        </div>
    );
}

export default Sidebar;
