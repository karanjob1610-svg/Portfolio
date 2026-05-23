import { motion } from "framer-motion";
import {
  FaPython,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { certifications } from "../data/certifications";

const certIcons = {
  python: FaPython,
  fullstack: FaCertificate,
  react: FaCertificate,
  web: FaCertificate,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Achievements"
          title="Certifications"
          description="Course certifications and training credentials from FITA Academy and hands-on learning"
        />

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => {
            const Icon = certIcons[cert.icon] || FaCertificate;
            return (
              <motion.div
                key={cert.id}
                className="group relative w-full max-w-sm overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="glass relative flex h-full flex-col items-center rounded-2xl p-6 text-center transition-all group-hover:border-sky-500/40">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/30">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="mb-1 text-sm text-sky-500 dark:text-sky-400">{cert.issuer}</p>
                  <p className="mb-3 text-xs text-slate-500">{cert.credential}</p>
                  <span className="mb-4 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-500 dark:text-sky-400">
                    {cert.year}
                  </span>

                  {cert.certificateUrl && (
                    <Button
                      variant="secondary"
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full !px-4 !py-2.5 text-xs"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Certificate
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
