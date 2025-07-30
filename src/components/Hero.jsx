import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4  text-slate-300">
      <div className='flex items-stretch justify-between'>
        <h1
      className='text-4xl md:text-6xl font-bold mb-4'
      >Hi I'm</h1>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1 }}
        onHoverStart={() => console.log('hover started!')}
      >
        Mohd Wali
      </motion.h1>
      </div>
      
      <motion.p
        className="text-lg md:text-xl text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A Frontend Developer who builds modern, responsive websites.
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 inline-block bg-blue-800 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-900 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  
  );
}

export default Hero;
