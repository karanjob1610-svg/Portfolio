import { motion } from "framer-motion";

export default function ProgressBar({ name, level }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="font-medium text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-300/70 dark:bg-slate-700/80">
        <motion.div
          className="h-full rounded-full bg-sky-700/80 dark:bg-sky-600/70"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
