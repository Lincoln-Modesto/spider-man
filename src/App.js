import React from 'react'
import { ReactSVG } from 'react-svg'

import logo from './images/logo.svg';
import titles from './images/titles.png';
import marvel from './images/marvel.svg';
import playstation from './images/ps.svg';
import hero from './images/hero.png';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';

import './styles/styles.scss'

export default function App() {
  return (
    <main>

      <header>
        <nav className="navbar">
          <div className="nav-menu">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">Story</a></li>
              <li><a href="#" className="nav-link">Wallpapers</a></li>
              <li><a href="#" className="nav-link">#BeYourself</a></li>
            </ul>
          </div>

          <div className="nav-social">
            <ReactSVG src={facebook} alt="facebook" />
            <ReactSVG src={instagram} alt="instagram" />
            <ReactSVG src={youtube} alt="youtube" />
            <ReactSVG src={twitter} alt="twitter" />
          </div>
        </nav>
      </header>

      <section className="container">
        <div className="container-item-1">

          <div>
            <img src={titles} alt="titles" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Iaculis velit magna vitae mauris orci fames posuere nibh.
            Sit tellus amet facilisi sit odio pulvinar scelerisque quam et.
            Ultrices facilisis nunc massa diam, quis mi imperdiet.
          </p>

          <div className='container-buttons'>
            <div className="btn">Pre-order now</div>
            <div className="btn-secondary">Watch the teaser</div>
          </div>

          <div>
            <img src={playstation} alt="playstation" />
            <img src={marvel} alt="marvel" />
          </div>
        </div>

        <div className="container-item-2">
          <img src={hero} alt="hero" className='spider-man' />
        </div>
      </section>
    </main>
  );
}

