import React from 'react'
import { ReactSVG } from 'react-svg'
import Tilty from 'react-tilty'

import logo from './images/logo.svg';
import titles from './images/titles.png';
import marvel from './images/marvel.svg';
import playstation from './images/ps.svg';
import hero from './images/hero.png';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import video from './video/spiderman2.mp4';

import './styles/styles.css'

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
          <div className='bx mr-3'></div>
        </nav>
      </header>

      <section className="bg-video">
        <video
          className="video"
          src={video}
          autoPlay
          loop
          muted
          typeof='video/mp4'></video>
      </section>

      <section className="container mt-2">
        <div className="container-item-1">

          <div className="px-1">
            <img src={titles} alt="titles" />
          </div>

          <p className='my-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Iaculis velit magna vitae mauris orci fames posuere nibh.
            Sit tellus amet facilisi sit odio pulvinar scelerisque quam et.
            Ultrices facilisis nunc massa diam, quis mi imperdiet.
          </p>

          <div>
            <div className="btn">Pre-order now</div>
            <div className="ml-2 btn-secondary">Watch the teaser</div>
          </div>

          <div className='mt-2 flex align-items-center'>
            <img src={playstation} alt="playstation" className='w-auto' />
            <img src={marvel} alt="marvel" className='w-auto ml-2' />
          </div>
        </div>

        <div className="container-item-2">
          <Tilty scale={1.05} perspective={2000}>
            <img src={hero} alt="hero" className='spider-man' />
          </Tilty>
        </div>
      </section>
    </main>
  );
}

