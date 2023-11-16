import React, { useEffect, useState } from 'react'
import cl from '../Player.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLiked } from '../../../../redux/slices/tracksSlice';

export default function Left() {
    const isTracks = useSelector((state) => state.tracks);
    const currentTrack = isTracks.tracks[isTracks.activeTrack];
    const dispatch = useDispatch()

    const handleLikeChange = () => {
        dispatch(isLiked(currentTrack.id))
    };

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (currentTrack !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [currentTrack]);

    return (
        <div className={cl.player__left} disabled={disabled}>
            <Link
                className={cl.player__logo}
                disabled={disabled}
                to={currentTrack.name}
            >
                <img className={cl.player__logo_img} disabled={disabled} src={currentTrack.img} alt="Img" />
            </Link>
            <div className={cl.player__info} disabled={disabled}>
                <Link
                    className={cl.player__name}
                    disabled={disabled}
                    to={currentTrack.name}
                >{currentTrack.name}</Link>
                <Link className={cl.player__creator} disabled={disabled} to={currentTrack.creators}>{currentTrack.creators}</Link>
            </div>
            <button className={cl.player__like} disabled={disabled} onClick={handleLikeChange}>
                <img
                    className={cl.player__like_img}
                    disabled={disabled}
                    src={`/img/icons/heart/${currentTrack.liked ? "heart-liked" : "heart"}.svg`}
                    alt="Heart"
                />
            </button>
        </div>
    )
}
