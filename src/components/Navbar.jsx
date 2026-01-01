import React, { useEffect, useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sectionLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  /* 🔥 Scroll to section from ANY page */
  const handleSectionNav = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* 🔥 Scroll Spy (HOME PAGE ONLY) */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }

    const sections = sectionLinks
      .filter((l) => l.id !== "home")
      .map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">

        {/* 🔷 Logo */}
        <Link to="/" className="text-xl font-extrabold text-sky-400">
          MW
        </Link>

        {/* 🖥 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`font-medium ${
                location.pathname === "/"
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-400"
              }`}
            >
              Home
            </Link>
          </li>

          {sectionLinks.slice(1).map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleSectionNav(link.id)}
                className={`font-medium transition ${
                  active === link.id
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-sky-400"
                }`}
              >
                {link.name}
              </button>

              {active === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-sky-400 rounded-full"
                />
              )}
            </li>
          ))}

          {/* 📞 Contact Page */}
          {/* <li>
            <Link
              to="/contact"
              className={`font-medium ${
                location.pathname === "/Contact"
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-400"
              }`}
            >
              Contact
            </Link>
          </li> */}

          {/* 📄 Resume */}
          <a
            href="/MohdWali_resume.pdf"
            download
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-black bg-gradient-to-r from-sky-500 to-purple-600 hover:scale-105 transition"
          >
            <FaDownload />
            Resume
          </a>
        </ul>

        {/* 📱 Mobile Button */}
        <button
          className="md:hidden text-2xl text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/90 text-white backdrop-blur-xl border-t border-white/10 flex flex-col items-center gap-6 py-8"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <button onClick={() => handleSectionNav("about")}>
              About
            </button>

            <button onClick={() => handleSectionNav("projects")}>
              Projects
            </button>

            <Link to="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <a
              href="/MohdWali_resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-sky-500 to-purple-600"
            >
              <FaDownload />
              Resume
            </a>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
