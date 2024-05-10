import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import Documentation from './components/Documentation';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage  />
      <Marquee />
      <Documentation />
      <About />
    </div>
  )
}

export default App
