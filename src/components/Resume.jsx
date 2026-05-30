import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { personalInfo } from "../data/personal";

const highlights = [
  "Python Full Stack Development",
  "Django Backend Development",
  "React.js Frontend Applications",
  "SQL Database Design & Optimization",
  "Git Version Control",
  "AI Tools to improve productivity",
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <SectionHeading
          subtitle="Resume"
          title="Download My CV"
          description="Get a comprehensive overview of my skills, experience, and qualifications"
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500">
                <FaFileAlt className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Resume Preview</h3>
                <p className="text-sm text-slate-400">PDF Format • Updated 2025</p>
              </div>
            </div>

            <div className="mb-6 space-y-3 border-l-2 border-sky-500/30 pl-4">
              <p className="font-semibold text-white">{personalInfo.name}</p>
              <p className="text-sky-400">{personalInfo.title}</p>
              <p className="text-sm text-slate-400">{personalInfo.location}</p>
            </div>

            <h4 className="mb-3 font-semibold text-slate-300">Key Highlights</h4>
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <FaCheckCircle className="shrink-0 text-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-cyan-500/5 p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-sky-500/10">
              <FaDownload className="text-4xl text-sky-400" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Ready to Connect?</h3>
            <p className="mb-8 max-w-sm text-slate-400">
              Download my full resume to learn more about my experience, projects, and
              technical skills for your next hire.
            </p>
            <Button href={personalInfo.resumeUrl} download className="!px-8">
              <FaDownload /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
