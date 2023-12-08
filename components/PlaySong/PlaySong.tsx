"use client"

import React from 'react'
import Image from 'next/image'
// import shuffle from '../app/assets/shuffle.svg'
import pause from '@assets/pause.svg'
// import repeat from '../app/assets/repeat.svg'
// import skip from '../app/assets/skip_next.svg'
import skipprev from '@assets/skip_previous.svg'
import { FormEvent, useEffect, useState, useRef } from 'react';
import bg from '@assets/bg.svg'


const PlaySong = () => {
    const [cid, setCid] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setIsPlaying(false);
    }, [cid])


    const updateProgress = () => {
        if (audioRef.current) {
            const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(newProgress);
        }
    };
    
    // @ts-ignore
    const handleSeekBarChange = (e) => {
        if (audioRef.current) {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(e.target.value);
        }
    };

    // @ts-ignore
    const handleBarClick = (e) => {
        if (audioRef.current) {
            const barRect = e.target.getBoundingClientRect();
            const clickX = e.clientX - barRect.left;
            const barWidth = barRect.width;
            const newProgress = (clickX / barWidth) * 100;
            
            const newTime = (newProgress / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(newProgress);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', updateProgress);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

    return (
        <>

            <div className=''>
                <span className='hello' style={{ width: '25px' }}>
                    <input className='appearance-none  rounded-lg outline-none form-radio h-3 overflow-hidden   w-40 relative top-6 transition-colors duration-300 ease-in-out '
                        type="range"
                        value={progress}
                        onChange={handleSeekBarChange}
                        onClick={handleBarClick}
                        min="0"
                        max="100"
                        step="0.01"
                        style={{ width: '50%', marginLeft: '20vw', color: '#ff66b2', background: `linear-gradient(to right, #FFFFFF ${progress}%, gray ${progress}%)` }}
                    />


                </span>
                <div className='container mt-4 flex mx-auto items-center rounded-t-3xl relative bg-gradient-to-b from-zinc-900 to-neutral-800 shadow border border-white border-opacity-5 backdrop-blur-[120px]' style={{ height: "120px", width: "1415px" }}>

                    <div className='flex items-center'>
                        <div className="mx-5 absolute bottom-10" style={{ height: "96px", width: "96px" }}>
                            <Image className="rounded-xl" src={bg} style={{height:"100%",width:"100%"}} alt=''/>
                        </div>
                        <div className='absolute left-32'>
                            <p className='text-white font-medium'>Left Hand Free</p>
                            <p className='text-white font-light'>alt-J</p>
                        </div>
                    </div>

                    <div className='container flex justify-center items-center'>
                        <span className='text-white'>2.56</span>

                        <div className='flex items-center w-72 h-12 justify-between mx-10'>
                            <button>
                                <div className='container bg-slate-500 rounded-full h-9 w-9' >
                                    <Image src={pause} alt="shuffle" />
                                </div>

                            </button>
                            <button>
                                <div className='container bg-slate-500 rounded-full h-12 w-12' >
                                    <Image src={pause} alt="skip" />
                                </div>
                            </button>

                            <button>
                                <div className='flex items-center justify-center container bg-white rounded-full h-12 w-12' >

                                    <audio ref={audioRef} controls style={{ display: 'none' }}>
                                        {/* <source src={`https://gateway.pinata.cloud/ipfs/${cid}`} type="audio/mp3" /> */}
                                        <source src={`https://gateway.pinata.cloud/ipfs/Qmd2j7ZFWFW7je66XMUwNU5z4TruVNcNsx3Hqv7LeFpHjc`} type="audio/mp3" />


                                    </audio>


                                    <Image onClick={togglePlayPause} src={isPlaying ? pause : skipprev} alt="pause" />
                                </div>
                            </button>
                            <button>
                                <div className='container bg-slate-500 rounded-full h-12 w-12' >
                                </div>
                            </button>
                            <button>
                                <div className='container bg-slate-500 rounded-full h-9 w-9' >
                                    <Image src={pause} alt="skipprev" />
                                </div>
                            </button>
                        </div>

                        <span className='text-white'>2.56</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PlaySong;