import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { navLinks } from "../data/navigation";
import { personalInfo } from "../data/personal";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "glass shadow-lg shadow-black/20 py-3"
            : "glass-light shadow-lg shadow-slate-200/50 py-3 bg-white/80"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <span className={isDark ? "text-white" : "text-slate-800"}>.</span>
        </motion.button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-sky-400"
                  : isDark
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-slate-600 hover:text-sky-600"
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-sky-500/10 border border-sky-500/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              isDark
                ? "glass text-sky-400 hover:bg-sky-500/10"
                : "glass-light text-amber-500 hover:bg-amber-500/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl lg:hidden ${
              isDark ? "glass text-slate-300" : "glass-light text-slate-700"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 top-[60px] z-40 lg:hidden ${
              isDark ? "bg-slate-950/98" : "bg-white/98"
            } backdrop-blur-xl`}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-lg font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-sky-500/10 text-sky-400"
                      : isDark
                        ? "text-slate-300 hover:bg-slate-800"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
