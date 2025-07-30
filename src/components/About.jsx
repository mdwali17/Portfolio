import { motion } from 'framer-motion';
import React from 'react';
function About() {
  return (
    <section id="about" className="py-20  px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className='flex justify-between items-center gap-10'>
      <motion.p
        className="text-slate-400 text-lg text-center"
        initial={{ opacity: 0 ,y:20 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Hi, I'm <span className="text-sky-400 font-semibold">Mohd Wali</span> — a passionate frontend developer with a strong foundation in building interactive, responsive web applications using technologies like
        <span className="text-sky-400"> React</span>, <span className="text-sky-400">Tailwind CSS</span>, and
        <span className="text-sky-400"> JavaScript</span>.
        I love creating smooth user experiences, modern UI designs, and continuously learning new technologies. Whether it's a portfolio, a web app, or a full-stack project — I enjoy bringing ideas to life in the browser.
        I'm currently looking for opportunities to grow and contribute as a frontend or React developer. Let’s build something amazing!
      </motion.p>
        <motion.img 
        src="/MohdWali.jpg" alt=""
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ delay:1,duration: 0.6, ease: "easeOut" }}
        className="w-40 h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-sky-500 shadow-lg flex-shrink-0"
        />
      </div>
    </section>
  );
}
export default About;
