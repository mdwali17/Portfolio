import React, { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-700/50 backdrop-blur-md text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">MW</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-sky-400">Home</a></li>
          <li><a href="#about" className="hover:text-sky-400">About</a></li>
          <li><a href="#projects" className="hover:text-sky-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
          <li>
            <a
              href="/MohdWali_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-2 py-1 border border-amber-900 text-slate-300 rounded-md font-semibold hover:bg-amber-900 hover:text-white transition duration-300"
            >
              <FaDownload />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-gray-800/90 md:hidden space-y-4 py-6">
          <li><a href="/" className="hover:text-sky-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-sky-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-sky-400" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <a
              href="/MohdWali_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-3 py-1 border border-amber-900 text-slate-300 rounded-md font-semibold hover:bg-amber-900 hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload />
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
