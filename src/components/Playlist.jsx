import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isActive } from '../redux/slices/tracksSlice';

export default function Playlist(props) {
  const isTracks = useSelector((state) => state.tracks);
  const [currentPlaylist, setCurrentPlaylist] = useState(isTracks.tracks[props.playlist.id_track[0]]);

  const dispatch = useDispatch();
  const handlePlaylistChange = () => {
    dispatch(isActive(currentPlaylist));
  };

  return (
    <div className='playlist' onClick={handlePlaylistChange}>
      <button className='playlist__button'>
        <img className='playlist__img' src={props.playlist.img} alt='Img' />
      </button>
      <div className='playlist__holder'>
        <button className='playlist__name'>{props.playlist.name}</button>
        <Link className='playlist__subinfo' to={props.playlist.creators}>{props.playlist.creators}</Link>
      </div>
    </div>
  );
}
