import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <footer className="text-white px-3 py-5 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-semibold">© 2025 Mohd Wali</div>

      <div class="flex space-x-6 ">
        <a href="https://github.com/mdwali17" target="_blank" className="hover:text-sky-400 transition">
            <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/mohd-wali-891081256/" target="_blank" className="hover:text-sky-400 transition">
          <FaLinkedin className='text-2xl'/>
        </a>
        <a href="mailto:mhwali625@gmail.com" className="hover:text-sky-400 transition">
          <FaEnvelope className='text-2xl'/>
        </a>
      </div>

      <div className="flex space-x-4 text-s">
        <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
        <a href="#about" className="hover:text-sky-400 transition">About</a>
        <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default Contact;
