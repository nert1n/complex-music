// Ваш компонент Player.js
import React, { useEffect, useRef, useState } from 'react';
import cl from './Player.module.scss';
import { useSelector } from 'react-redux';
import Right from './Right/Right';
import Left from './Left/Left';
import Center from './Center/Center';

export default function Player() {
  const isTracks = useSelector((state) => state.tracks);
  const currentTrack = isTracks.tracks[isTracks.activeTrack];
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

  useEffect(() => {
    const audio = audioPlayer.current;
    if (audio) {
      if (audio.ended) {
        audio.play();
      } else {
        audio.pause();
      }
      if (isTracks.playTrack) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isTracks.playTrack]);

  return (
    <div className={cl.player}>
      <div className='container'>
        <div className={cl.player__holder}>
          <audio ref={audioPlayer} src={currentTrack.src} onTimeUpdate={handleTimeUpdate}/>
          <Left />
          <Center
            audioPlayer={audioPlayer}
            duration={duration}
            currentTime={currentTime} 
            setCurrentTime={setCurrentTime}
          />
          <Right audioPlayer={audioPlayer} />
        </div>
      </div>
    </div>
  );
}
