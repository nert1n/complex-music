import React, { useEffect, useState } from 'react';
import cl from '../Player.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { syncState } from '../../../../redux/slices/currentTrackSlice';


export default function Center(props) {
    const currentTrack = useSelector((state) => state.currentTrack);
    const isTracks = useSelector((state) => state.tracks);
    const dispatch = useDispatch()
    const audio = props.audioPlayer.current;
    const [isPause, setIsPause] = React.useState(false);
    const [isRepeating, setIsRepeating] = React.useState(false);

    const handleSeek = (event) => {
        audio.currentTime = event.target.value;
        props.setCurrentTime(audio.currentTime);
    };

    const handleRepeatToggle = () => {
        audio.loop = !audio.loop;
        setIsRepeating(!isRepeating);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const isTime =  `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (isTime != 'NaN:NaN') {
            return isTime;
        } else {
            return '0:00'
        }
        
    };

    const [playImg, setPlayImg] = useState('/img/icons/play/play.svg')
    const togglePlay = () => {
        const audio = props.audioPlayer.current;
        if (audio) {
            if (audio.paused || audio.ended) {
                audio.play();
                setPlayImg('img/icons/play/pause.svg')
            } else {
                audio.pause();
                setPlayImg('img/icons/play/play.svg')
            }
            setIsPause(!isPause);
        }
    }
    
    useEffect(() => {
        setPlayImg('img/icons/play/play.svg')
    }, [currentTrack])

    const nextTrack = () => {
        changeTrack(currentTrack.id + 1)
    }
    const backTrack = () => {
        changeTrack(currentTrack.id - 1)
    }
    const [change, setChange] = useState(false)
    const changeTrack = (state) => {
        let newTrack = isTracks.tracks[state];
        if (newTrack && newTrack.name) {
            dispatch(syncState(newTrack))
        } else {
            newTrack = isTracks.tracks[0];
            dispatch(syncState(newTrack))
        }
        setChange(true)
    };

    useEffect(() => {
        if(change == true) {
            audio.play()
            setPlayImg('img/icons/play/pause.svg')
            setChange(false)
        }
    }, [currentTrack])
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (currentTrack.src !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [currentTrack.src]);

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
                    <button className={cl.player__stop} disabled={disabled} onClick={togglePlay}>
                        <img className={cl.player__stop_img} disabled={disabled} src={playImg} alt={isPause ? "Pause" : "Play"} />
                    </button>
                    <button className={cl.player__arrow} disabled={disabled} onClick={nextTrack}>
                        <img className={cl.player__arrow_img} disabled={disabled} src="/img/icons/arrows/next-arrow.svg" alt="Next" />
                    </button>
                </div>
                <button className={cl.player__repeat} disabled={disabled} onClick={handleRepeatToggle}>
                    <img className={cl.player__repeat_img} disabled={disabled} src={`/img/icons/${isRepeating ? "repeat-active" : "repeat"}.svg`} alt="Repeat" />
                </button>
            </div>
            <div className={cl.player__time} disabled={disabled}>
                <p className={cl.player__time_start} disabled={disabled}>{formatTime(props.currentTime)}</p>
                <input
                    className={cl.player__time_line}
                    type="range"
                    min="0"
                    max={isNaN(props.duration) ? '__:__' : props.duration}
                    value={props.currentTime}
                    onChange={handleSeek}
                    disabled={disabled}
                />
                <p className={cl.player__time_end} disabled={disabled}>{formatTime(props.duration)}</p>
            </div>
        </div>
    );
}
