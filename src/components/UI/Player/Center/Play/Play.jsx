import React, { useEffect } from 'react'
import cl from '../../Player.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { isPlay } from '../../../../../redux/slices/tracksSlice';

export default function Play(props) {
    const isTracks = useSelector((state) => state.tracks);
    const dispatch = useDispatch()
    const playTrack = isTracks.playTrack;
    const audio = props.audioPlayer.current;
    
    const togglePlay = () => {
        if (isTracks.playTrack) {
            dispatch(isPlay(false))
        } else {
            dispatch(isPlay(true))
        }
        
    }

    useEffect(() => {
        if(playTrack == true) {
            audio.play()
            dispatch(isPlay(true))
        }
        
    }, [isTracks.activeTrack])

    return (
        <button
            className={cl.player__stop}
            onClick={togglePlay}
            disabled={props.disabled}
        >
            <img
                className={cl.player__stop_img}
                src={`img/icons/play/${isTracks.playTrack ? 'pause' : 'play'}.svg`}
                alt={playTrack ? "Pause" : "Play"}
                disabled={props.disabled}
            />
        </button>
    )
}
