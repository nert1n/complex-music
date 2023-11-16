import React, { useEffect, useState } from 'react';
import cl from '../Player.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { isActive } from '../../../../redux/slices/tracksSlice';
import Time from './Time/Time';
import Play from './Play/Play';

export default function Center(props) {
    const isTracks = useSelector((state) => state.tracks);
    const currentTrack = isTracks.tracks[isTracks.activeTrack];
    const dispatch = useDispatch()
    const audio = props.audioPlayer.current;
    const [isRepeating, setIsRepeating] = useState(false);
    const [disabled, setDisabled] = useState(true);
    
    const handleRepeatToggle = () => {
        audio.loop = !audio.loop;
        setIsRepeating(!isRepeating);
    };

    const nextTrack = () => {
        changeTrack(isTracks.activeTrack + 1)
    }
    const backTrack = () => {
        changeTrack(isTracks.activeTrack - 1)
    }

    const changeTrack = (state) => {
        if (isTracks.tracks.length > 0 && state >= 0 && state < isTracks.tracks.length) {
            dispatch(isActive(state))
        } else {
            dispatch(isActive(0))
        }
    };

    useEffect(() => {
        if (currentTrack.src !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [currentTrack.src]);
    console.log(props);
return (
        <div className={cl.player__center}>
            <div className={cl.player__play} disabled={disabled}>
                <button className={cl.player__shuffle} disabled={disabled}>
                    <img className={cl.player__shuffle_img} disabled={disabled} src="/img/icons/shuffle.svg" alt="Shuffle" />
                </button>
                <div className={cl.player__plays} disabled={disabled}>
                    <button className={cl.player__arrow} disabled={disabled} onClick={backTrack} name='back'>
                        <img className={cl.player__arrow_img} disabled={disabled} src="/img/icons/arrows/back-arrow.svg" alt="Back" />
                    </button>
                    <Play disabled={disabled} audioPlayer={props.audioPlayer}/>
                    <button className={cl.player__arrow} disabled={disabled} onClick={nextTrack}>
                        <img className={cl.player__arrow_img} disabled={disabled} src="/img/icons/arrows/next-arrow.svg" alt="Next" />
                    </button>
                </div>
                <button className={cl.player__repeat} disabled={disabled} onClick={handleRepeatToggle}>
                    <img className={cl.player__repeat_img} disabled={disabled} src={`/img/icons/${isRepeating ? "repeat-active" : "repeat"}.svg`} alt="Repeat" />
                </button>
            </div>
            <Time disabled={disabled} duration={props.duration} audioPlayer={audio} audio={audio} updateDragging={props.updateDragging} currentTime={props.currentTime} setCurrentTime={props.setCurrentTime}/>
        </div>
    );
}
