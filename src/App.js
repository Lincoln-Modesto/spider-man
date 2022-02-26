import React, { useRef, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import Tilty from 'react-tilty'
import { gsap } from "gsap";
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
import { Expo } from 'gsap/all';

export default function App() {
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .fromTo('.bg-loader', 1, { width: '100%' }, {
        width: '0%', delay: 5,
        ease: Expo.easeInOut
      })
      .fromTo('.bg-video', 2, { width: '0%', opacity: 0 },
        { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=1')

      .fromTo('.logo', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
  
      .fromTo('.nav-list', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
  
      .fromTo('.nav-social', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

      .fromTo('.item-1', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

      .fromTo('.item-2', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

      .fromTo('.item-3', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

      .fromTo('.item-4', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

      .fromTo('.item-5', 0.7, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
  })

  return (
    <main>

      <section className='bg-loader'>

        <svg style={{ maxWidth: '144px' }} viewBox="0 0 55 77" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="logo-spiderman" fill-rule="evenodd" clip-rule="evenodd" d="M30.4431 34.6386L30.703 34.1559C33.3391 35.6906 39.4431 39.3762 42.7698 41.8416C42.745 43.9208 42.5247 49.401 41.8416 54.6881C41.5322 57.3243 40.2599 63.8589 37.646 68.9084C39.1435 66.9158 42.4876 61.3713 43.8836 55.1337C44.3663 53.3639 45.4653 48.0495 46 40.9505C43.1534 39.3045 36.1683 35.5223 31 33.5619L31.3713 32.7822C35.1955 33.8342 44.1287 36.5025 49.2673 38.7599C49.1559 41.4332 48.495 48.4505 46.7426 55.1337C45.8371 58.5866 43.3416 67.4753 36.2723 76C36.3697 75.8994 36.4882 75.78 36.6273 75.6398C38.1308 74.1248 42.0302 70.1956 47.5223 61.6312C50.2698 56.5446 52.0891 50.6782 54.3911 36.7178C48.9703 34.9728 41.5817 33.0421 31.594 32.0025L31.8911 31.4084C35.6039 31.2104 44.2772 31.0743 49.2673 32.1139C49.8366 28.3144 49.6312 19.4975 45.146 14.6262C46.1361 17.3366 47.9827 24.0569 46.5569 29.255C42.9307 29.2302 34.9431 29.3812 32.0025 30.1832L31.5198 29.552C33.698 28.2525 38.6708 25.5421 41.1361 25.0965C41.1442 25.0372 41.1523 24.9774 41.1605 24.9172C41.8684 19.7099 42.9799 11.5342 35.4554 1C37.2747 4.75 40.2153 13.802 38.3143 23.2772L30.9257 28.6609L30.3688 27.8812L32.6336 25.5421C32.2252 24.8738 31.0074 23.3812 29.4035 22.7574C30.1708 23.6733 31.2079 25.698 29.2178 26.4703H26.2846C25.4307 26.2475 24.198 25.1931 26.099 22.7574C25.3193 23.1163 23.604 24.1757 22.9802 25.5421L24.6881 27.5842L24.3168 28.3267L17.1881 23.3144C16.3465 19.6881 15.6584 10.1559 19.6386 1.03713C19.3184 1.62679 19.0101 2.18895 18.7142 2.7287C14.6868 10.0738 12.9356 13.2677 14.1807 25.0965C15.5792 25.3936 19.3639 26.6856 23.3144 29.4777L23.0916 29.9604C19.7005 29.6386 12.0941 29.0619 8.79702 29.3292C8.22772 26.6807 7.70544 20.0322 10.1708 14.6262C6.27228 20.1213 5.49257 24.1312 6.16089 32.2252C8.9703 31.6807 16.2896 30.755 23.0916 31.4084L23.3144 32.0025C18.3144 32.6337 6.85148 34.4604 1 36.7178C1.16384 37.5953 1.32289 38.4557 1.47881 39.2991C2.91289 47.0566 4.0818 53.3797 6.27228 58.3639C9.98538 65.5044 13.156 69.1728 17.0129 73.6354C17.6683 74.3937 18.3435 75.1749 19.0446 76C13.0668 67.7203 6.87376 57.3243 6.16089 38.7599C10.0965 37.1881 19.1931 33.7921 24.0941 32.7822L24.4282 33.5619C20.4183 35.2574 11.7673 39.0941 9.5396 40.8762C9.56418 41.2066 9.58838 41.5383 9.61269 41.8715C10.1759 49.5913 10.7984 58.1239 17.5965 68.9084C15.4802 64.2673 13.0891 58.9802 12.5842 41.8416C15.5173 39.8738 22.0446 35.5817 24.6881 34.1559L24.9851 34.6386C23.6485 35.4926 20.5446 37.6386 18.8218 39.3911C18.7104 40.1089 18.5545 42.7847 18.8218 47.745C20.0965 50.0594 23.6559 55.0668 27.6955 56.5817C29.7624 55.7401 34.4084 52.7946 36.4579 47.745C36.6188 46.5569 36.9035 43.2376 36.7549 39.4653C35.5173 38.3391 32.5223 35.797 30.4431 34.6386ZM20.5 39.5L23.5 37L21.5 40C21.5 45.5 23.3216 49.0567 27.8 50.8C33.0938 47.745 34 45 34 40L32 37L35.2 39.8C35.2951 42.3648 35.4229 43.7895 34.7 46.5C33.5 49.5 31.5 51.5 27.7 53.8C24 51.5 23 50 20.7 46.5C20.3164 43.5132 20.1274 41.9879 20.5 39.5Z" fill="#EDF1F7" stroke="#EDF1F7" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </section>

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
        <div className="container-item-1 item-1">

          <div className="px-1">
            <img src={titles} alt="titles" />
          </div>

          <p className='my-2 item-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Iaculis velit magna vitae mauris orci fames posuere nibh.
            Sit tellus amet facilisi sit odio pulvinar scelerisque quam et.
            Ultrices facilisis nunc massa diam, quis mi imperdiet.
          </p>

          <div className='item-3'>
            <div className="btn">Pre-order now</div>
            <div className="ml-2 btn-secondary">Watch the teaser</div>
          </div>

          <div className='mt-2 flex align-items-center item-4'>
            <img src={playstation} alt="playstation" className='w-auto' />
            <img src={marvel} alt="marvel" className='w-auto ml-2' />
          </div>
        </div>

        <div className="container-item-2 item-5">
          <Tilty scale={1.05} perspective={2000}>
            <img src={hero} alt="hero" className='spider-man' />
          </Tilty>
        </div>
      </section>
    </main>
  );
}

