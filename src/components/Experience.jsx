import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaGraduationCap,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { experiences, fresherInfo } from "../data/experience";

const typeIcons = {
  Training: FaGraduationCap,
  "Personal Projects": FaLaptopCode,
};

const typeColors = {
  Training: "from-amber-500 to-orange-500",
  "Personal Projects": "from-emerald-500 to-teal-500",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Experience"
          title="My Journey"
          description="As a fresher, my experience comes from training, academic learning, and personal projects — ready to grow with your company"
        />

        <motion.div
          className="skill-card mx-auto mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-700/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white dark:bg-sky-800/80">
              <FaUserGraduate />
              {fresherInfo.badge}
            </span>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 sm:text-xl">
              {fresherInfo.headline}
            </h3>
          </div>

          <p className="mb-5 leading-relaxed text-slate-600 dark:text-slate-300">
            {fresherInfo.message}
          </p>

          <ul className="grid gap-2 sm:grid-cols-2">
            {fresherInfo.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <FaCheckCircle className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-cyan-500 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type] || FaBriefcase;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`hidden w-1/2 md:block ${isLeft ? "pr-12 text-right" : "pl-12"}`}
                />

                <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-slate-50 ring-4 ring-sky-500/30 dark:bg-slate-950 md:left-1/2">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${typeColors[exp.type]} text-sm text-white`}
                  >
                    <Icon />
                  </div>
                </div>

                <div
                  className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className="glass rounded-2xl p-6 transition-all hover:border-sky-500/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span
                      className={`mb-2 inline-block rounded-full bg-gradient-to-r ${typeColors[exp.type]} px-3 py-0.5 text-xs font-semibold text-white`}
                    >
                      {exp.type}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="mb-1 text-sm font-medium text-sky-500 dark:text-sky-400">
                      {exp.company}
                    </p>
                    <p className="mb-3 text-xs text-slate-500">{exp.period}</p>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
