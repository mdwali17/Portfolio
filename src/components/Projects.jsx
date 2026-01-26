import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Task App",
    description: "A modern task management app built with Spring Boot & React.",
    demo: "https://task-application-three.vercel.app/",
    tech: ["React", "MongoDB","SpringBoot"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, animations, and skills.",
    demo: "https://mohdwaliportfolio.netlify.app/",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "VoteSphere",
    description:
      "Full-stack voting application built using React & Node.js.",
    demo: "https://votingapp17.netlify.app/",
    tech: ["React", "Node.js", "Express"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 🔮 Background Glow */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🧠 Heading */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold mb-20 text-center text-slate-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-sky-400">Projects</span>
      </motion.h2>

      {/* 🧩 Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid gap-10 md:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -10, scale: 1.04 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl transition"
          >
            {/* ✨ Hover Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition" />

            {/* 📌 Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-200 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* 🛠 Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-sky-500/10 text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 Actions */}
              <motion.a
                href={project.demo}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-sky-500 to-purple-600"
              >
                Live Demo →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
