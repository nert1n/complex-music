import React, { useEffect, useState } from 'react'
import cl from './TrackNavigate.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { isActive, isPlay } from '../../../redux/slices/tracksSlice';

export default function TrackNavigate(props) {
  const isTracks = useSelector((state) => state.tracks);
  const dispatch = useDispatch()
  const playTrack = isTracks.playTrack;
  const audio = props.audioRef.current;
  const [playImg, setPlayImg] = useState('play');
  const [isRepeating, setIsRepeating] = useState(false);

  const mathRandom = (min, max) => {
    let id = Math.floor(Math.random() * max) + min
    return id;
  }

  const togglePlay = () => {
    if (isTracks.playTrack) {
        dispatch(isPlay(false))
    } else {
        dispatch(isPlay(true))
    }
  }

  useEffect(() => {
    if (isTracks.playTrack) {
      audio.play()
      setPlayImg('pause')
    } else {
      audio.pause()
      setPlayImg('play')
    }
  }, [isTracks.playTrack])

  const nextTrack = () => {
    if (props.isShuffle) {
      changeTrack(mathRandom(1, isTracks.tracks.length))
    } else {
      changeTrack(isTracks.activeTrack + 1)
    }
  }
  const backTrack = () => {
    changeTrack(isTracks.activeTrack - 1)
  }

const changeTrack = (state) => {
    if (isTracks.tracks.length > 1 && state >= 1 && state < isTracks.tracks.length) {
        dispatch(isActive(state))
    } else {
        dispatch(isActive(1))
    }
};

const repeatToggle = () => {
  audio.loop = !audio.loop;
  setIsRepeating(!isRepeating);
};

const shuffleToggle = () => {
  props.shuffleChange()
};

  return (
    <div className={cl.navigate}>

      <button className={cl.navigate__shuffle} onClick={shuffleToggle}>
        <img className={cl.navigate__shuffle_img} src={`/img/icons/${props.isShuffle ? 'shuffle-active' : 'shuffle'}.svg`} alt="Shuffle" />
      </button>

      <div className={cl.navigate__holder}>

      {
          isTracks.activeTrack > 1
          ? 
          <button className={cl.navigate__arrow} onClick={backTrack} name='back'>
            <img className={cl.navigate__arrow_img} src="/img/icons/arrows/back-arrow.svg" alt="Back" />
          </button>
          : 
          <button disabled className={cl.navigate__arrow} onClick={backTrack} name='back'>
          </button>
        }
        
        <button
            className={cl.navigate__play}
            onClick={togglePlay}
        >
          <img
            className={cl.navigate__play_img}
            src={`img/icons/play/${playImg}.svg`}
            alt={playTrack ? "Pause" : "Play"}
          />
        </button>

        <button className={cl.navigate__arrow} onClick={nextTrack}>
          <img className={cl.navigate__arrow_img} src="/img/icons/arrows/next-arrow.svg" alt="Next" />
        </button>

      </div>

      <button className={cl.navigate__repeat} onClick={repeatToggle}>
        <img className={cl.navigate__repeat_img} src={`/img/icons/${isRepeating ? "repeat-active" : "repeat"}.svg`} alt="Repeat" />
      </button>

    </div>
  )
}
