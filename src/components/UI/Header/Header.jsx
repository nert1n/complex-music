import React from 'react'
import cl from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <Link className={cl.header__logo} to='/'><img src="/img/icons/Complex.svg" alt="Complex music" /></Link>
          <nav className={cl.header__nav}>
            <input className={cl.header__input} type="search" placeholder="Search..."/>
            <div className={cl.header__buttons}>
              <button className={cl.header__button}>
                <img className={cl.header__img} src="/img/icons/icon-moon.svg" alt="Moon" />
              </button>
              <button className={cl.header__button}>
                <img className={cl.header__img} src="/img/icons/bell.svg" alt="Bell" />
              </button>
              <button className={cl.header__button}>
                <img className={cl.header__img} src="/img/icons/profile_avatar_icon.svg" alt="Profile" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}