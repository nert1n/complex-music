import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isActive } from '../redux/slices/tracksSlice';

export default function TracksCard(props) {
  const dispatch = useDispatch();

  const handleTrackChange = () => {
    dispatch(isActive(props.tracks.id));
  };
    
  return (
    <div className='tracks__card'>
      <Link className='tracks__card_button'  onClick={handleTrackChange}>
        <img className='tracks__card_img' src={props.tracks.img} alt='#' />
      </Link>
      <div className='tracks__card_info'>
        <h4 className='tracks__card_title'>{props.tracks.name}</h4>
        <Link className='tracks__card_subinfo' to={props.tracks.creators}>{props.tracks.creators}</Link>
      </div>
    </div>
  );
}
