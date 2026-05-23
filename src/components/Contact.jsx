import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { personalInfo } from "../data/personal";
import { openMailClient } from "../utils/mail";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    openMailClient(form.subject, body);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-800 placeholder-slate-500 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder-slate-500";

  const contactItems = [
    {
      Icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      onClick: () => openMailClient(),
    },
    {
      Icon: FaPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      value: personalInfo.whatsapp,
      href: personalInfo.whatsappUrl,
      external: true,
    },
    { Icon: FaMapMarkerAlt, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactItems.map(({ Icon, label, value, href, onClick, external }) => {
                const content = (
                  <>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                      <Icon className="text-xl text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                      <p className="font-medium text-slate-700 dark:text-slate-200">{value}</p>
                    </div>
                  </>
                );

                if (href || onClick) {
                  return (
                    <a
                      key={label}
                      href={href || personalInfo.mailtoUrl}
                      onClick={
                        onClick
                          ? (e) => {
                              e.preventDefault();
                              onClick();
                            }
                          : undefined
                      }
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="glass flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-colors hover:border-sky-500/40 hover:bg-sky-500/5"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={label} className="glass flex items-center gap-4 rounded-xl p-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Connect with me</p>
              <SocialLinks size="lg" />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={`${inputClass} mb-4`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className={`${inputClass} mb-6 resize-none`}
            />
            <Button type="submit" className="w-full sm:w-auto">
              <FaPaperPlane /> Send via Email
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
