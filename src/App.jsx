import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Cursor from './components/Cursor';


function App() {
  return (
    <div className='cursor-pointer'>
      <Cursor/>
    <Navbar/>
    <div className="bg-gray-800 text-slate-800 ">
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </div>
    </div>
  );
}

export default App;

