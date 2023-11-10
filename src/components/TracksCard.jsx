import React from 'react'
import { useDispatch } from 'react-redux';
import { syncState } from '../redux/slices/currentTrackSlice';
import { Link } from 'react-router-dom';

export default function TracksCard(props) {
    const dispatch = useDispatch()
    const handleTrackChange = () => {
        dispatch(syncState(props.tracks))
    };
    return (
        <div className='tracks__card'>
            <Link className='tracks__card_button'  onClick={handleTrackChange}>
                <img className='tracks__card_img' src={props.tracks.img} alt="#" />
            </Link>
            <div className='tracks__card_info'>
                <h4 className='tracks__card_title'>{props.tracks.name}</h4>
                <Link className='tracks__card_subinfo' to={props.tracks.creators}>{props.tracks.creators}</Link>
            </div>
        </div>
    )
}
