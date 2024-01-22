import React, { useEffect, useState } from 'react'
import cl from './TrackTimeLine.module.scss';
import Slider from 'rc-slider';

export default function TrackTimeLine(props) {
  const [currentTime, setCurrentTime] = useState(0)
  const audio = props.audioRef.current;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const isTime = `${String(minutes)}:${String(seconds).padStart(2, '0')}`;
    if (isTime == 'NaN:NaN') {
      return '0:00';
    } else {
      return isTime;
    }
  };

  const seek = (event) => {
    audio.currentTime = event;
    setCurrentTime(event)
  };

  useEffect(() => {
    setCurrentTime(Math.round(props.currentTime))
  }, [props.currentTime])

  return (
    <div className={cl.time}>
      <p className={cl.time__start}>
        {Math.floor(currentTime / 60)}:
        {
          Math.floor(currentTime % 60) <= 9
          ? `0${Math.floor(currentTime % 60)}`
          : Math.floor(currentTime % 60)
        }
      </p>
          <Slider
            className={cl.time__line}
            type="range"
            min={0}
            max={Math.round(audio.duration)}
            value={currentTime}
            onChange={seek}
          />
      <p className={cl.time__end}>{formatTime(audio.duration)}</p>
  </div>
  )
}
