import { personalInfo } from "../data/personal";
import { footerLinks } from "../data/navigation";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-bold">
              <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <p className="text-sm text-slate-400">{personalInfo.title}</p>
            <p className="mt-2 text-sm text-slate-500">{personalInfo.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-300">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-300">Connect</h4>
            <SocialLinks size="sm" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
