import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/personal";
import { openMailClient } from "../utils/mail";

const icons = [
  { Icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
  { Icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { Icon: FaWhatsapp, href: personalInfo.social.whatsapp, label: "WhatsApp" },
  { Icon: FaEnvelope, href: personalInfo.mailtoUrl, label: "Email", isMail: true },
];

export default function SocialLinks({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-9 w-9 text-base",
    md: "h-11 w-11 text-lg",
    lg: "h-12 w-12 text-xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map(({ Icon, href, label, isMail }, index) => (
        <motion.a
          key={label}
          href={href}
          onClick={
            isMail
              ? (e) => {
                  e.preventDefault();
                  openMailClient();
                }
              : undefined
          }
          target={isMail || href.startsWith("mailto") ? undefined : "_blank"}
          rel={isMail || href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={`${sizeClasses[size]} glass flex items-center justify-center rounded-xl text-slate-400 transition-colors hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}
