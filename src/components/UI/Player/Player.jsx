import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isActive, isPlay } from '../../../redux/slices/tracksSlice';
import cl from './Player.module.scss';
import TrackInfo from '../../Track/TrackInfo/TrackInfo';
import TrackNavigate from './../../Track/TrackNavigate/TrackNavigate';
import TrackTimeLine from './../../Track/TrackTimeLine/TrackTimeLine';
import TrackExtra from './../../Track/TrackExtra/TrackExtra';

export default function Player() {
  const isTracks = useSelector((state) => state.tracks);
  const currentTrack = isTracks.tracks[isTracks.activeTrack];
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!isDragging) {
      setCurrentTime(audioRef.current.currentTime);
    }
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  }

  const mathRandom = (min, max) => {
    let id = Math.floor(Math.random() * max) + min
    return id;
  }

  const changeTrack = () => {
    if (isShuffle) {
      const state = mathRandom(1, isTracks.tracks.length);
      if (isTracks.tracks.length > 0 && state >= 0 && state < isTracks.tracks.length) {
        dispatch(isActive(state))
      } else {
        dispatch(isActive(1));
      }
    } else {
      const state = isTracks.activeTrack + 1;
      if (isTracks.tracks.length > 0 && state >= 0 && state < isTracks.tracks.length) {
        dispatch(isActive(state));
      } else {
        dispatch(isActive(1));
      }
    }
  };

  const shuffleChange = () => {
    setIsShuffle(!isShuffle);
  };

  return (
    <div className={cl.player}>
      <div className='container'>
        <div className={cl.player__holder}>
          <audio
            src={currentTrack.src}
            ref={audioRef}
            autoPlay={true}
            loop={false}
            onPlay={() => {dispatch(isPlay(true))}}
            onPause={() => {dispatch(isPlay(false))}}
            onAbort={() => {dispatch(isPlay(true))}}
            onEnded={changeTrack}
            //onError={(error) => console.error('Error during audio playback:', error)}
            //onSeeked={(time) => console.log('Seeked to', time)}
            //onLoadedData={() => console.log('Audio data loaded')}
            //onCanPlay={() => console.log('Audio can play')}
            onTimeUpdate={handleTimeUpdate}
          />
          <TrackInfo/>
          <div>
            
            {audioRef.current != null
            ? <>
                <TrackNavigate
                  audioRef={audioRef}
                  shuffleChange={shuffleChange}
                  isShuffle={isShuffle}
                />
                <TrackTimeLine
                  audioRef={audioRef}
                  duration={duration}
                  currentTime={currentTime} 
                  setCurrentTime={setCurrentTime}
                  setIsDragging={setIsDragging}
                />
              </>
            : ''
            }
          </div>
          <TrackExtra audioRef={audioRef}/>
        </div>
      </div>
    </div>
  );
}
