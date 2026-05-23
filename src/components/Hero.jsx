import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "../data/personal";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600/10 blur-[80px]" />
      </div>

      <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="mb-4 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            className="mb-6 text-xl font-semibold sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypingAnimation texts={personalInfo.typingTexts} />
          </motion.div>

          <motion.p
            className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            className="mb-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button variant="outline" onClick={() => scrollTo("projects")}>
              View Projects <FaArrowRight className="text-sm" />
            </Button>
            <Button variant="outline" href={personalInfo.resumeUrl} download>
              <FaDownload /> Download Resume
            </Button>
            <Button variant="outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </Button>
          </motion.div>

          <SocialLinks />
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-400 opacity-30 blur-2xl" />
            <div className="gradient-border rounded-3xl">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-2">
                {imageError ? (
                  <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-5xl font-bold text-white shadow-xl shadow-sky-500/30 sm:h-40 sm:w-40 sm:text-6xl">
                        {personalInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <p className="text-sm text-slate-500">Profile Photo Placeholder</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} Profile`}
                    className="h-72 w-72 rounded-2xl object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
