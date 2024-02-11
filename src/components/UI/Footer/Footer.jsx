import React from 'react';
import cl from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <p>Site created by <a href='https://github.com/nert1n' target='_blank' rel='noreferrer'>nert1n</a></p>
      <p>©2023</p>
    </footer>
  );
}
