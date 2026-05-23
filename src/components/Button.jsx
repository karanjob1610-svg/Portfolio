import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-cyan-400",
  secondary:
    "glass text-sky-400 hover:bg-sky-500/10 hover:text-sky-300 border-sky-500/30",
  outline:
    "border-2 border-sky-500/50 bg-transparent text-sky-500 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-400 dark:text-sky-400",
  ghost: "text-slate-400 hover:text-sky-400 hover:bg-sky-500/10",
};

const motionByVariant = {
  outline: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  default: {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
  },
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  download,
  target,
  rel,
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 dark:focus:ring-offset-slate-950 focus:ring-offset-slate-50";

  const combined = `${baseStyles} ${variants[variant]} ${className}`;
  const motionProps = motionByVariant[variant] || motionByVariant.default;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={combined} {...motionProps}>
      {children}
    </motion.button>
  );
}
