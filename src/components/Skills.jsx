import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "HTML & CSS", level: 95 },
  { name: "Next.js", level: 80 },
  { name: "Framer Motion", level: 75 },
];

const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Months Experience", value: "12+" },
  { label: "Technologies Used", value: "10+" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 🔮 Background Glow */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🧠 Heading */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-center mb-20 text-slate-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="text-sky-400">Skills</span>
      </motion.h2>

      {/* 📊 Stats */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-xl"
          >
            <h3 className="text-4xl font-extrabold text-sky-400">
              {stat.value}
            </h3>
            <p className="mt-2 text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 🛠 Skills */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex justify-between mb-3">
              <span className="text-slate-200 font-semibold">
                {skill.name}
              </span>
              <span className="text-sky-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
