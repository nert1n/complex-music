import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { syncState } from '../redux/slices/currentTrackSlice';
import { Link } from 'react-router-dom';

export default function Playlist(props) {
    const tracks = useSelector((state) => state.tracks.tracks);
    
    const [currentPlaylist, setCurrentPlaylist] = useState(tracks[props.playlist.id_track[0]])

    const dispatch = useDispatch()
    const handlePlaylistChange = () => {
        dispatch(syncState(currentPlaylist))
    }; 
    return (
        <div className='playlist' onClick={handlePlaylistChange}>
            <button className='playlist__button'>
                <img className='playlist__img' src={props.playlist.img} alt="Img" />
            </button>
            <div className='playlist__holder'>
                <button className='playlist__name'>{props.playlist.name}</button>
                <Link className='playlist__subinfo' to={props.playlist.creators}>{props.playlist.creators}</Link>
            </div>
        </div>
    )
}
