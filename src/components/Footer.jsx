import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";
import resumePDF from "../assets/IrfanAfifiRomzi_Resume.pdf";

const SOCIALS = [
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/irfanafifiromzi" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/irfanafifiromzi" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/_.ipeyys" },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — no-op, the email is still visible/clickable
    }
  };

  return (
    <footer className="border-t border-ink-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact us */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-4">
              Contact us
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href={`mailto:${CONTACT.email}`} className="text-ink-900 hover:text-accent transition-colors break-all">
                {CONTACT.email}
              </a>
              <button
                onClick={copyEmail}
                className="text-xs font-semibold text-ink-400 hover:text-accent transition-colors underline underline-offset-4"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>
            <a
              href={resumePDF}
              download="IrfanAfifiRomzi_Resume.pdf"
              className="mt-4 inline-block text-sm text-ink-500 hover:text-accent transition-colors underline underline-offset-4"
            >
              download PDF resume
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Skills", href: "/#skills" },
                { label: "Experience", href: "/#experience" },
                { label: "Work", href: "/#projects" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-4">
              Follow us
            </p>
            <ul className="space-y-2">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors w-fit"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-200 mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-400">
          <p className="max-w-lg leading-relaxed">
            The content of this site belongs to Irfan Afifi Romzi and may not be reused without permission.
          </p>
          <p className="whitespace-nowrap">&copy; {year} Irfan Afifi Romzi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
