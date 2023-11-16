import React from 'react'
import cl from '../../Player.module.scss';

export default function Time(props) {
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

    const handleSeek = (event) => {
        props.audio.currentTime = event.target.value;
        if (!props.isDragging) {
            props.setCurrentTime(props.audio.currentTime);
        }
    };

    const handleSliderDragStart = () => {
        props.updateDragging(true);
    };

    const handleSliderDragEnd = () => {
        props.updateDragging(false);
    };
    return (
        <div className={cl.player__time} disabled={props.disabled}>
            <p className={cl.player__time_start} disabled={props.disabled}>{formatTime(props.currentTime)}</p>
                <input
                    className={cl.player__time_line}
                    type="range"
                    step={1}
                    min="0"
                    max={String(props.duration)}
                    value={props.currentTime}
                    onChange={handleSeek}
                    onMouseDown={handleSliderDragStart}
                    onMouseUp={handleSliderDragEnd}
                    disabled={props.disabled}
                />
            <p className={cl.player__time_end} disabled={props.disabled}>{formatTime(props.duration)}</p>
        </div>
    )
}
