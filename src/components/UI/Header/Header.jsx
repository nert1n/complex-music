import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cl from './Header.module.scss';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.value);

  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <Link className={cl.header__logo} to='/'>
            <img src='img/icons/Complex.svg' alt='Complex music' />
          </Link>
          <nav className={cl.header__nav}>
            <input
              className={cl.header__input}
              type='search'
              placeholder='Search...'
            />
            <div className={cl.header__buttons}>
              <button className={cl.header__button}>
                <img
                  className={cl.header__img}
                  src='/img/icons/icon-moon.svg'
                  alt='Moon'
                />
              </button>
              <button className={cl.header__button}>
                <img
                  className={cl.header__img}
                  src='/img/icons/bell.svg'
                  alt='Bell'
                />
              </button>
              {isAuth == true ? (
                <Link className={cl.header__button} to='/profile'>
                  <img
                    className={cl.header__img}
                    src='/img/icons/profile_avatar_icon.svg'
                    alt='Profile'
                  />
                </Link>
              ) : (
                <Link className={cl.header__button} to='/login'>
                  <img
                    className={cl.header__img}
                    src='/img/icons/profile_avatar_icon.svg'
                    alt='Profile'
                  />
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
