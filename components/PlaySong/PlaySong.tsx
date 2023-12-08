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
import queue from '@assets/queue_music.svg'
import { MdOutlineVolumeUp } from "react-icons/md";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMdSkipForward } from "react-icons/io";

import { IoMdSkipBackward } from "react-icons/io";

import { IoMdShuffle } from "react-icons/io";


import { CiRepeat } from "react-icons/ci";
import styled from 'styled-components';

import { FaPlay } from "react-icons/fa";
import { PlaySongContainer, SongDetailsContainer, SongImage, SongInfo, Title, Artist, ControlsContainer, ControlButton, PlayPauseButton, SongControlButton, Duration, Songing, Sliderrange, Volume, QueueMusic } from '@styles/PlaySong/style'
import { IconContext } from 'react-icons/lib';
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { GoMute } from "react-icons/go";
import './PlaySong.css'






const playSong = () => {
    const [cid, setCid] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);
    const [volvalue, setvolvalue] = useState(0.5);
    const [timemint, setmint] = useState(0);
    const [timesec, setsec] = useState<string | null>('00');
    const [Ismute, setIsmte] = useState<boolean>(true);

    var durationmint = '0'
    var durationsec = '00'


    const [volume, setVolume] = useState(50);
    if (audioRef.current) {
        durationmint = (parseInt(audioRef.current.duration.toFixed(0)) / 60).toFixed(0);
        durationsec = `${parseInt(audioRef.current.duration.toFixed(0)) % 60}`;
        const dur = parseInt(durationsec)
        durationsec = dur < 10 ? `0${dur}` : `${dur}`;
    }

    const handleVolumeChange = (e) => {
        if (audioRef.current) {
            const newVolume = parseFloat(e.target.value);
            setVolume(e.target.value);
            audioRef.current.volume = newVolume;
            setvolvalue(newVolume)

        }
    };
    const handlemute = () => {
        if (audioRef.current) {
            if (Ismute) {
                audioRef.current.volume = 0;
            }
            else {
                audioRef.current.volume = volvalue;
            }
            setIsmte(!Ismute)
        }
    }

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
    }, [cid]);
    // const handleVolumeChange = (e) => {
    //     if (audioRef.current) {
    //         const newVolume = parseFloat(e.target.value);
    //         setVolume(newVolume);
    //         audioRef.current.volume = newVolume;
    //         setvolvalue(e.target.value);
    //     }

    // };


    const updateProgress = () => {
        if (audioRef.current) {
            const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;

            setProgress(newProgress);
            const totalSeconds = Math.floor(audioRef.current.currentTime);
            const minute = Math.floor(totalSeconds / 60);
            const second = totalSeconds % 60;

            setmint(minute);
            setsec(second < 10 ? `0${second}` : `${second}`);

        }
    };
    const sliderStyle = {
        background: `linear-gradient(to right, white ${volume}%, black ${volume}%)`,
    };

    const handleSeekBarChange = (e) => {
        if (audioRef.current) {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(e.target.value);

            // settime(newTime)
        }
    };
    const handleBarClick = (e) => {
        if (audioRef.current) {
            const barRect = e.target.getBoundingClientRect();
            const clickX = e.clientX - barRect.left;
            const barWidth = barRect.width;
            const newProgress = (clickX / barWidth) * 100;

            const newTime = (newProgress / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(newProgress);
            // settime(newTime)
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

            <div>



                <PlaySongContainer>
                    <Sliderrange>
                        <input className='w-full h-1 appearance-none rounded-none'
                            type="range"
                            value={progress}
                            onChange={handleSeekBarChange}
                            onClick={handleBarClick}
                            min="0"
                            max="100"
                            step="0.01"
                            style={{ width: '40vw', background: `linear-gradient(to right, #FFFFFF ${progress}%, gray ${progress}%)` }}

                        />
                        <style>

                        </style>

                    </Sliderrange>


                    <Songing>
                        <SongDetailsContainer>
                            <div>
                                <SongImage src={bg} alt='' />
                            </div>
                            <SongInfo>
                                <Title>Left Hand Free</Title>
                                <Artist>alt-J</Artist>
                            </SongInfo>
                        </SongDetailsContainer>

                        <ControlsContainer style={{}}>
                            <Duration style={{ marginRight: '9vw', opacity: '0.4' }}>{timemint}:{timesec}</Duration>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <ControlButton style={{ height: '40px', width: '40px' }}>
                                    <IoMdShuffle style={{ color: 'white', height: '15px', width: '40px' }} />
                                </ControlButton>
                                <ControlButton style={{ height: '45px', width: '45px', backgroundColor: '#2b2b2b' }}>
                                    <IoMdSkipBackward style={{ color: 'white', height: '18px', width: '40px' }} />
                                </ControlButton>

                                <PlayPauseButton  onClick={togglePlayPause} >
                                    <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                                        {/* <FaPlay /> */}
                                        <audio ref={audioRef} controls style={{ display: 'none' }}>
                                            {/* <source src={`https://gateway.pinata.cloud/ipfs/${cid}`} type="audio/mp3" /> */}
                                            <source src={`https://gateway.pinata.cloud/ipfs/QmYqqLFV7NW9vDRdVQi7Yp7mug16Dpeb7qUFHtCQvFX5KK`} type="audio/mp3" />


                                        </audio>



                                        <div >
                                            {isPlaying ? <FaPause style={{ height: '18px' }} /> : <FaPlay style={{ height: '18px' }} />}
                                        </div>


                                    </IconContext.Provider>

                                </PlayPauseButton>

                                <ControlButton style={{ height: '45px', width: '45px', backgroundColor: '#2b2b2b' }}>
                                    <IoMdSkipForward style={{ color: 'white', height: '18px', width: '40px' }} />
                                </ControlButton>
                                <ControlButton style={{ height: '20px', width: '45px' }}>
                                    <CiRepeat style={{ color: 'white', height: '15px', width: '45px' }} />

                                </ControlButton>
                            </div>
                            <Duration style={{ marginLeft: '9vw', opacity: '0.4' }}>{durationmint}:{durationsec}</Duration>
                        </ControlsContainer>
                        <Volume>
                            <QueueMusic>
                                <MdOutlineQueueMusic style={{ color: 'white', height: '22px', width: '40px', marginRight: '1vw' }} />
                                <div onClick={handlemute} style={{ color: 'white', height: '22px', display: 'flex', width: '  ', alignItems: 'center', justifyContent: 'center' }} >
                                    {Ismute ? <MdOutlineVolumeUp style={{ width: '40px', height: '25px' }} /> : <GoMute style={{ width: '40px', height: '25px' }} />}
                                </div>
                                {/* <input className='overflow-hidden'
                                    type="range"
                                    id="volume"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    style={sliderStyle}
                                /> */}
                                <input
                                    type="range"
                                    id="volume"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    className="w-full h-1 appearance-none rounded-none"
                                    style={{
                                        background: `linear-gradient(to right, white ${volume * 100}%, gray ${volume * 100}%)`,
                                    }}
                                />

                            </QueueMusic>
                        </Volume>
                    </Songing>
                </PlaySongContainer>

            </div>
        </>
    )
}

export default playSong;

// {/* <div className=''>
// <div className='container mt-4 flex mx-auto items-center rounded-t-3xl relative bg-gradient-to-b from-zinc-900 to-neutral-800 shadow border border-white border-opacity-5 backdrop-blur-[120px]' style={{ height: "120px", width: "1415px" }}>

// <div className='flex items-center'>
// <div className="mx-5 absolute bottom-10" style={{ height: "96px", width: "96px" }}>
// <Image className="rounded-xl" src={bg} style={{height:"100%",width:"100%"}} alt=''/>
// </div>
// <div className='absolute left-32'>
// <p className='text-white font-medium'>Left Hand Free</p>
// <p className='text-white font-light'>alt-J</p>
// </div>
// </div>

// <div className='container flex justify-center items-center'>
// <span className='text-white'>2.56</span>

// <div className='flex items-center w-72 h-12 justify-between mx-10'>
// <button>
//   <div className='container bg-slate-500 rounded-full h-9 w-9' >
//       <Image src={pause} alt="shuffle" />
//   </div>

// </button>
// <button>
//   <div className='container bg-slate-500 rounded-full h-12 w-12' >
//       <Image src={pause} alt="skip" />
//   </div>
// </button>

// <button>
//   <div className='flex items-center justify-center container bg-white rounded-full h-12 w-12' >

//       <audio ref={audioRef} controls style={{ display: 'none' }}>
//           {/* <source src={`https://gateway.pinata.cloud/ipfs/${cid}`} type="audio/mp3" /> */}
//           <source src={`https://gateway.pinata.cloud/ipfs/Qmd2j7ZFWFW7je66XMUwNU5z4TruVNcNsx3Hqv7LeFpHjc`} type="audio/mp3" />


//       </audio>


//       <Image onClick={togglePlayPause} src={isPlaying ? pause : skipprev} alt="pause" />
//   </div>
// </button>
// <button>
//   <div className='container bg-slate-500 rounded-full h-12 w-12' >
//   </div>
// </button>
// <button>
//   <div className='container bg-slate-500 rounded-full h-9 w-9' >
//       <Image src={pause} alt="skipprev" />
//   </div>
// </button>
// </div>

// <span className='text-white'>2.56</span>
// </div>

// </div>

// </div> */}