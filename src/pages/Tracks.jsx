import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TracksCard from './../components/TracksCard';
import Footer from './../components/UI/Footer/Footer';

export default function Tracks() {  
  const tracks = useSelector((state) => state.tracks.tracks);
  const fetchTracks = async () => {
    const response = await fetch('/api/tracks'); // Замените '/api/tracks' на ваш эндпоинт, который обрабатывает запрос к базе данных
    const data = await response.json();
    console.log(data);
    return data;
  };
  return (
    <>
      <main className='tracks'>
        <div className='tracks__holder'>
          <div className='tracks__playlists'>
            <div className='tracks__info'>
              <h3 className='tracks__title'>For me</h3>
              <Link className='tracks__button' to={tracks}>See more</Link>
            </div>
            <div className='tracks__cards'>
              {tracks.slice(1, 5).map((el) => (
                <TracksCard  key={el.id} tracks={el}/>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
