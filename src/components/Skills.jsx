import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";
import { SiDjango, SiMysql, SiGithub } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import SectionHeading from "./SectionHeading";
import ProgressBar from "./ProgressBar";
import { skillCategories } from "../data/skills";

const categoryIcons = {
  frontend: FaCode,
  backend: FaPython,
  database: FaDatabase,
  tools: FaTools,
};

const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  "React.js": FaReact,
  Python: FaPython,
  Django: SiDjango,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: SiGithub,
  "VS Code": VscCode,
  ChatGPT: FaCode,
  "Cursor AI": FaCode,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Skills"
          title="Technical Expertise"
          description="Proficient across the full development stack with hands-on project experience"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = categoryIcons[category.icon] || FaTools;
            return (
              <motion.div
                key={category.id}
                className="skill-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-700/50">
                    <CategoryIcon className="text-xl text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skillIcons[skill.name];
                    return (
                      <div key={skill.name} className="flex items-start gap-3">
                        {Icon && (
                          <Icon className="mt-0.5 shrink-0 text-base text-slate-500 dark:text-slate-400" />
                        )}
                        <div className="flex-1">
                          <ProgressBar name={skill.name} level={skill.level} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
