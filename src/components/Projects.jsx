import { motion } from 'framer-motion';
import React from 'react';
const projects = [
  {
    title: 'Task App',
    description: 'A simple Task App built with React.',
    demo: 'https://taskapp-460z.onrender.com',
    code: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio site showcasing projects and skills.',
    demo: '#',
    code: '#'
  },
  {
    title: 'Weather App',
    description: 'Weather app using OpenWeather API and React.',
    demo: '#',
    code: '#'
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-300">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl  mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-sky-600/20 p-6 rounded-lg shadow hover:shadow-2xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-800 mb-4">{project.description}</p>
            <a href={project.demo} className="text-blue-800 hover:underline mr-4">Live Demo</a>
            <a href={project.code} className="text-blue-800 hover:underline">Code</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
