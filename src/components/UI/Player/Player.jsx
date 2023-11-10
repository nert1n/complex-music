import React, {  useRef, useState } from 'react'
import cl from './Player.module.scss'
import { useSelector } from 'react-redux';
import Right from './Right/Right';
import Left from './Left/Left';
import Center from './Center/Center';

export default function Player() {
  const currentTrack = useSelector((state) => state.currentTrack);
  const audioPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    const audio = audioPlayer.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  return (
    <div className={cl.player}>
      <div className='container'>
        <div className={cl.player__holder}>
          <audio ref={audioPlayer} src={currentTrack.src} onTimeUpdate={handleTimeUpdate}/>
          <Left audioPlayer={audioPlayer}/>
          <Center audioPlayer={audioPlayer} duration={duration} currentTime={currentTime} setCurrentTime={setCurrentTime}/>
          <Right audioPlayer={audioPlayer}/>
        </div>
      </div>
    </div>
  )
}
