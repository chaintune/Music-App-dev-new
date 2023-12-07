const Navbar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 10px 10px 10px' }}>
            <div className="w-[395px] h-12 justify-start items-start gap-6 inline-flex ">
                <div className="text-[40px] text-white font-['Aileron'] leading-[48px] ">Home</div>
                <div className="opacity-30 text-white text-[40px] font-['Aileron'] leading-[48px]">Explore</div>
                <div className="opacity-30  text-white text-[40px] font-['Aileron'] leading-[48px]">Search</div>

            </div>
            <div className="flex items-center justify-center h-full" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="w-[168px] h-14 bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px] flex gap-x-4 mr-2.5 items-center" style={{ paddingLeft: '10px' }}>
                    <div className="w-6 h-6 bg-zinc-800 rounded-full border-2 border-neutral-900" />
                    <div className="text-white text-base font-light font-['Aileron'] leading-normal">2,485</div>
                    <div className="w-12 h-12 bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px] flex items-center justify-center">
                        <img src="./Vector 2.png" alt="no" />
                    </div>

                </div>


                <div className="w-[280px] h-14 bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px] flex gap-x-4 mr-2.5 items-center" style={{ paddingLeft: '10px' }}>
                    <div className="opacity-60 text-white text-base font-light font-['Aileron'] leading-normal">0xdg83tv...</div>
                    <div className="flex gap-x-0">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-neutral-900" />
                        <div className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-neutral-900" />
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full" />
                </div>

            </div>
        </div>
    );
}

export default Navbar;