import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="about"
      className="relative  py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 🔮 Background blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🧠 Heading */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold mb-16 text-center text-slate-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About <span className="text-sky-400">Me</span>
      </motion.h2>

      {/* 🪟 Glass Card */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">

          {/* 📝 Text */}
          <motion.div variants={item} className="flex-1">
            <p className="text-slate-400 text-lg leading-relaxed">
  Hi, I'm{" "}
  <span className="text-sky-400 font-semibold">Mohd Wali</span> — a
  passionate full-stack developer focused on building{" "}
  <span className="text-sky-400">scalable</span>,{" "}
  <span className="text-sky-400">secure</span>, and{" "}
  <span className="text-sky-400">high-performance</span> web applications using{" "}
  <span className="text-sky-400">React</span>,{" "}
  <span className="text-sky-400">Node.js</span>,{" "}
  <span className="text-sky-400">Spring Boot</span>, and{" "}
  <span className="text-sky-400">MongoDB</span>.
  <br />
  <br />
  On the frontend, I create{" "}
  <span className="text-sky-400">interactive</span>,{" "}
  <span className="text-sky-400">responsive</span>, and{" "}
  <span className="text-sky-400">modern</span> user interfaces using{" "}
  <span className="text-sky-400">React</span>,{" "}
  <span className="text-sky-400">Tailwind CSS</span>, and{" "}
  <span className="text-sky-400">JavaScript</span>. On the backend, I develop{" "}
  <span className="text-sky-400">REST APIs</span>, implement{" "}
  <span className="text-sky-400">JWT authentication</span>, and build secure
  server-side applications with{" "}
  <span className="text-sky-400">Node.js</span> and{" "}
  <span className="text-sky-400">Spring Boot</span>.
  <br />
  <br />
  I enjoy building complete end-to-end applications, solving real-world
  problems, and continuously learning new technologies to improve performance,
  scalability, and user experience.
  <br />
  <br />
  Currently seeking opportunities as a{" "}
  <span className="text-sky-400">Full-Stack Developer</span>,{" "}
  <span className="text-sky-400">Backend Developer</span>, or{" "}
  <span className="text-sky-400">React Developer</span> — let’s build something
  impactful together.
</p>

          </motion.div>

          {/* 🧲 Avatar with 3D tilt */}
          <motion.div
            variants={item}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative flex-shrink-0"
          >
            {/* Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 blur-xl opacity-70"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <img
              src="/MohdWali.jpg"
              alt="Mohd Wali"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-sky-500 shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
