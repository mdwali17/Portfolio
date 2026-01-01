import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-slate-300 px-6">

      {/* 🌌 Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 🔮 Glow */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-gradient-to-r from-sky-500/30 to-purple-600/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🧲 Main Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl max-w-3xl text-center"
      >

        {/* 👋 Intro */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m
        </motion.h1>

        {/* ✨ Name */}
        <motion.h1
          className="mt-3 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          whileHover={{ scale: 1.15 }}
        >
          Mohd Wali
        </motion.h1>

        {/* 📝 Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-slate-400"
        >
          I am a{" "}
          <span className="text-sky-400 font-semibold">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "UI Engineer",
                "Next.js Developer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </span>
        </motion.p>

        {/* 🔘 CTA */}
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.12,
            boxShadow: "0px 25px 50px rgba(56,189,248,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-10 py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-sky-500 to-purple-600"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* ⬇ Scroll */}
      <motion.div
        className="absolute bottom-8 text-slate-400"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}

export default Hero;
