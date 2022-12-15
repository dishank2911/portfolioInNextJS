'use client';

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';

const Header = () => {

  const [clicked, setclicked] = useState(false);
  const [navColor, setnavColor] = useState("#292727");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("#292727");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (

    <div>
      <header className="w-full text-white lg:block md:hidden hidden fixed z-10" style={{
        backgroundColor: navColor,
        transition: "all 1s",
      }}>
        <div className='container mx-auto flex h-24 justify-between items-center '>
          <Link href="/">
            <h1 className='font-extrabold text-4xl '><span className="hero-gradient-heading ">#</span>Disha<span className='hero-gradient-heading'>nk</span><span
              className="hero-gradient-heading">.</span></h1>
          </Link>
          <nav>
            <ul className='flex flex-wrap justify-end items-center gap-16 font-bold text-xs uppercase'>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <Link href="/">Home</Link><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <a href="#about">About</a><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <a href="#services">Services</a><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <a href="#project">Projects</a><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <a href="#skill">Skills</a><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
              <li className='group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-pink-500 duration-300'>
                <a href="#contact">Contact</a><span className='group-hover:max-w-full block max-w-0 transition-all duration-500 h-0.5 bg-pink-500'></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="text-white lg:hidden md:block h-24 px-10 fixed w-full z-20" style={{
        backgroundColor: navColor,
        transition: "all 1s"
      }}>
        <div className='flex justify-between items-center pt-7'>

          <div>
            <div>
              <Link href="/">
                <h1 className='font-bold text-4xl'><span className="hero-gradient-heading">#</span>Disha<span className='hero-gradient-heading'>nk</span><span
                  className="hero-gradient-heading">.</span></h1>
              </Link>
            </div>

          </div>
          <div>
            <nav>
              <div className="flex flex-col items-center text-6xl font-bold" role='button' onClick={() => setclicked(!clicked)}>
                {
                  !clicked ? <span><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg></span> : <span><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg></span>
                }
              </div>
            </nav>
          </div>
        </div>
      </header>
      {
        clicked && <nav className='flex justify-center z-10'>
          <ul className='flex flex-col gap-8 justify-center items-center bg-[#292727] w-screen h-1/2 container text-white font-bold py-40 fixed top-[96px] z-10 animatedNav'
          style={{
            backgroundColor: navColor,
            transition: "all 1s"
          }}>
            <li className='group'>
              <Link href="/" onClick={() => setclicked(!clicked)}>Home</Link><span className='group-hover:max-w-full'></span>
            </li>
            <li className='group'>
              <a href="#about" onClick={() => setclicked(!clicked)}>About</a><span className='group-hover:max-w-full'></span>
            </li>
            <li className='group'>
              <a href="#services" onClick={() => setclicked(!clicked)}>Services</a><span className='group-hover:max-w-full'></span>
            </li>
            <li className='group'>
              <a href="#project" onClick={() => setclicked(!clicked)}>Projects</a><span className='group-hover:max-w-full'></span>
            </li>
            <li className='group'>
              <a href="#skill" onClick={() => setclicked(!clicked)}>Skills</a><span className='group-hover:max-w-full'></span>
            </li>
            <li className='group'>
              <a href="#contact" onClick={() => setclicked(!clicked)}>Contact</a><span className='group-hover:max-w-full'></span>
            </li>
          </ul>
        </nav>
      }
    </div>

  )
}

export default memo(Header);