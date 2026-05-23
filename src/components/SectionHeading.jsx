import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title, description }) {
  return (
    <motion.div
      className="mb-12 text-center md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="mb-3 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-400">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
