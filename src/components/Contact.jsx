import React from "react";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <footer
      id="contact"
      className="bg-black text-slate-300 pt-5 pb-5 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-white mb-6"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Have a project in mind or looking for a frontend developer?
          Feel free to reach out — I’d love to connect!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <motion.a
            href="mhwali625@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400 transition"
          >
            <FaEnvelope className="text-3xl text-sky-400" />
            <span className="font-medium">Email</span>
            <span className="text-slate-400 text-sm">
              mhwali625@gmail.com
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/mdwali17"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400 transition"
          >
            <FaGithub className="text-3xl text-sky-400" />
            <span className="font-medium">GitHub</span>
            <span className="text-slate-400 text-sm">
              github.com/mdwali17
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mohdwali/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400 transition"
          >
            <FaLinkedin className="text-3xl text-sky-400" />
            <span className="font-medium">LinkedIn</span>
            <span className="text-slate-400 text-sm">
              linkedin.com/in/mohdwali
            </span>
          </motion.a>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Mohd Wali. All rights reserved.</span>
          <span>
            Built with <span className="text-sky-400">React</span> &{" "}
            <span className="text-sky-400">Tailwind CSS</span>
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Contact;
