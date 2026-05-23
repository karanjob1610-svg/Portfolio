import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { aboutSkills } from "../data/skills";

const skillIcons = {
  Python: FaPython,
  "Django / Flask": SiDjango,
  "React.js": FaReact,
  JavaScript: FaJs,
  SQL: FaDatabase,
  "REST APIs": FaServer,
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Who I Am"
          description="Passionate developer dedicated to building exceptional digital experiences"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Professional Summary</h3>
            <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
              I am a dedicated Python Full Stack Developer with a strong foundation in
              building scalable web applications. My expertise spans from crafting robust
              backends with Django and Flask to creating intuitive, responsive frontends
              with React.js and modern CSS frameworks.
            </p>
            <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
              I thrive in collaborative environments and enjoy solving complex problems
              through clean, maintainable code. My experience includes designing RESTful
              APIs, optimizing database queries, and implementing secure authentication systems.
            </p>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-bold text-black dark:text-white">Career Objective:</span> To join
              an innovative IT company where I can contribute to meaningful projects while
              continuously growing as a full-stack engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-sky-600 dark:text-sky-300">My Passion</h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Software development is more than a career — it&apos;s my passion. I love
                turning ideas into reality, learning new technologies, and staying at the
                forefront of web development trends.
              </p>
            </div>

            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-200">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {aboutSkills.map((skill, index) => {
                const Icon = skillIcons[skill] || FaPython;
                return (
                  <motion.div
                    key={skill}
                    className="glass group flex flex-col items-center rounded-xl p-4 transition-all hover:border-sky-500/40 hover:bg-sky-500/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="mb-2 text-3xl text-sky-400 transition-transform group-hover:scale-110" />
                    <span className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
                      {skill}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
