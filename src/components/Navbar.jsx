import React from 'react'
import {FaDownload} from 'react-icons/fa';
function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-700/50 backdrop-blur-md text-white flex items-center justify-between px-6 py-4 shadow-md z-50">
      <div className="logo text-xl font-bold">MW</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-sky-400">Home</a></li>
        <li><a href="#about" className="hover:text-sky-400">About</a></li>
        <li><a href="#projects" className="hover:text-sky-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
        <li><a href="/MohdWali_resume.pdf" download className="inline-flex items-center gap-2 px-2 py-0.5 border-3 border-amber-900 text-slate-300 rounded-md font-semibold hover:bg-amber-900  hover:text-white transition duration-300"
        >
          <FaDownload/>
          Resume
        </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar