import React, { useEffect, useState } from 'react'
import cl from './TrackExtra.module.scss'
import Slider from 'rc-slider';

export default function TrackExtra(props) {
  const [volume, setVolume] = useState(100)
  const [oldVolume, setOldVolume] = useState(50)

  const [sound, setSound] = useState('sound');

  useEffect(() => {
    if (volume > 50) {
      setSound('sound');
    } else if (volume > 0) {
      setSound('sound-mid');
    } else {
      setSound('sound-none');
    }
  }, [volume]);

  const volumeChange = (event) => {
    setVolume(event)
    props.audioRef.current.volume = event / 100;
  };

  const volumeMute = () => {
    if (volume > 0) {
      setOldVolume(volume)
      setVolume(0)
      props.audioRef.current.volume = 0;
    } else {
      setVolume(oldVolume)
      props.audioRef.current.volume = oldVolume / 100;
    }
  }

  return (
    <div className={cl.extra}>
      <div className={cl.extra__sound}>
        <button className={cl.extra__mute} onClick={volumeMute}>
          <img className={cl.extra__mute_img} src={`/img/icons/sound/${sound}.svg`} alt="Sound" />
        </button>
        <div className={cl.extra__slider}>
          <Slider
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={volumeChange}
          />
        </div>
      </div>
    </div>
  )
}
