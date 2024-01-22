import React from 'react'
import cl from './TrackInfo.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLiked } from '../../../redux/slices/tracksSlice';

export default function TrackInfo() {
    const isTracks = useSelector((state) => state.tracks);
    const dispatch = useDispatch()
    const currentTrack = isTracks.tracks[isTracks.activeTrack];

    const likeChange = () => {
        dispatch(isLiked(currentTrack.id))
    };

    return (
        <div className={cl.track}>
            {isTracks.activeTrack == 0
                ? ''
                : 
                <>
                    <Link className={cl.track__img} to={currentTrack.name}>
                        <img src={currentTrack.img}/>
                    </Link>
                    <div className={cl.track__info} >
                        <Link className={cl.track__name} to={currentTrack.name}>
                            {currentTrack.name}
                        </Link>
                        <Link className={cl.track__creator} to={currentTrack.creators}>{currentTrack.creators}</Link>
                    </div>
                    <button className={cl.track__like} onClick={likeChange}>
                        <div className={`${cl.track__like_img} ${currentTrack.liked ? cl.active : ''}`}></div>
                    </button>
                </>
            }
        </div>
    )
}
