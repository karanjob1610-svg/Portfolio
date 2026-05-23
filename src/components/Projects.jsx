import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="A selection of my recent work showcasing full-stack development capabilities"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition-all hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 !px-4 !py-2 text-xs"
                  >
                    <FaGithub /> GitHub
                  </Button>
                  <Button
                    variant="outline"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 !px-4 !py-2 text-xs"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
