import React from 'react';
import { useSelector } from 'react-redux';
import Playlist from '../../Playlist';
import cl from './Sidebar.module.scss';

export default function Sidebar() {
  const playlists = useSelector((state) => state.playlists.playlists);

  return (
    <div className={cl.sidebar}>
      <div className='container'>
        <div className={cl.sidebar__holder}>
          <div className={cl.sidebar__title}>
            <p className={cl.sidebar__name}>Playlists</p>
            <button className={cl.sidebar__button}>+</button>
          </div>
          <input className={cl.sidebar__input} type='search' placeholder='Search...'/>
          <div className={cl.sidebar__playlists}>
            {playlists.map((el) => (
              <Playlist playlist={el} key={el.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
