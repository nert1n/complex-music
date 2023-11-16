import React, { useEffect, useState } from 'react'
import cl from '../Player.module.scss'
import { useSelector } from 'react-redux';

export default function Right(props) {
  const isTracks = useSelector((state) => state.tracks);
  const currentTrack = isTracks.tracks[isTracks.activeTrack];
  const audio = props.audioPlayer.current;
  const [sound, setSound] = useState('/img/sound/sound.svg')
  const [volume, setVolume] = useState(100)

  const muteValue = () => {
    if(volume > 0) {
      audio.volume = 0
      setVolume(0)
    } else {
      audio.volume = 1
      setVolume(100)
    }
  }

  useEffect(() => {
    if(volume > 50) {
      setSound('/img/icons/sound/sound.svg')
    } else if(volume > 0) {
      setSound('/img/icons/sound/sound-mid.svg')
    } else {
      setSound('/img/icons/sound/sound-none.svg')
    }
  }, [volume])

  const handleVolumeChange = (event) => {
    const volumeValue = event.target.value;
    audio.volume = volumeValue / 100;
    setVolume(volumeValue);
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
      if (currentTrack.src !== "") {
          setDisabled(false);
      } else {
          setDisabled(true);
      }
  }, [currentTrack.src]);

  return (
    <div className={cl.player__right}>
      <div className={cl.player__sound}>
        <button className={cl.player__mute} onClick={muteValue}>
          <img className={cl.player__mute_img} src={sound} alt="Sound"/>
        </button>
        <input
          className={cl.player__sound}
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}
