import { motion } from "framer-motion";
import React from "react";

const timeline = [
  {
    type: "experience",
    title: "Frontend Developer (Self Projects)",
    place: "Personal & Freelance Projects",
    date: "2024 – 2025",
    description:
      "Built responsive, animated web applications using React, Tailwind CSS, and Framer Motion. Focused on clean UI, performance, and component reusability.",
  },
  {
    type: "experience",
    title: "React Developer (Practice & Intern-level)",
    place: "Hands-on Learning",
    date: "2023 – 2024",
    description:
      "Worked on multiple React projects including task apps, portfolios, and full-stack integrations. Strengthened JavaScript, hooks, and API handling.",
  },
  {
    type: "education",
    title: "Bachelor’s Degree",
    place: "Your College / University",
    date: "2021 – 2025",
    description:
      "Completed graduation with focus on computer fundamentals, programming, and web technologies.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 🔮 Background Glow */}
      <motion.div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
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
        Experience & <span className="text-sky-400">Education</span>
      </motion.h2>

      {/* 🧭 Timeline */}
      <div className="relative z-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-white/10 hidden md:block" />

        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-sky-400 rounded-full hidden md:block" />

              {/* Card */}
              <div
                className={`w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <span className="text-sm text-sky-400 font-semibold">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-200 mt-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-medium">
                  {item.place}
                </p>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
