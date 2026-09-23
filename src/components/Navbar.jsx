import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import LogoMark from "./LogoMark";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "about", href: "/#about" },
  { label: "skills", href: "/#skills" },
  { label: "experience", href: "/#experience" },
  { label: "work", href: "/#projects" },
];

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/irfanafifiromzi", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/irfanafifiromzi", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/_.ipeyys", label: "Instagram" },
];

// Panel: fades + drops in as one sheet, then staggers its children in behind it.
const panelVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.06, delayChildren: 0.08 },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: "easeIn" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Nav link with a rolling text reveal on hover (tubikstudio.com's actual
 * nav interaction — two stacked copies of the label in a clipped window;
 * hovering slides the whole stack up by one line, swapping in the second
 * copy — not a color fade.
 */
// Clip window and line-height must stay equal at every breakpoint — the
// roll works by shifting a two-line stack up by exactly half its height.
const ROLL_LINE = "h-7 leading-7 xl:h-8 xl:leading-8 2xl:h-9 2xl:leading-9";
const ROLL_TYPE = "font-display text-xl font-normal tracking-tight xl:text-2xl 2xl:text-[1.75rem]";

const NavLinkRoll = ({ to, label, scrolled }) => (
  <Link to={to} className={`group relative block overflow-hidden ${ROLL_LINE}`}>
    <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
      {/* Darkens once the bar goes transparent, so the labels keep their
          contrast against whatever is scrolling past underneath. */}
      <span
        className={`block transition-colors duration-500 ${ROLL_LINE} ${ROLL_TYPE} ${
          scrolled ? "text-ink-900" : "text-ink-500"
        }`}
      >
        {label}
      </span>
      <span className={`block text-ink-900 ${ROLL_LINE} ${ROLL_TYPE}`}>{label}</span>
    </span>
  </Link>
);

/** Hamburger that morphs into an X — three bars rotate/fade via Framer Motion. */
const MenuToggle = ({ open }) => (
  <div className="relative flex h-4 w-6 flex-col justify-between">
    <motion.span
      className="block h-0.5 w-full rounded-full bg-ink-900"
      animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    />
    <motion.span
      className="block h-0.5 w-full rounded-full bg-ink-900"
      animate={open ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.15 }}
    />
    <motion.span
      className="block h-0.5 w-full rounded-full bg-ink-900"
      animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    />
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 80;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  // Thins right out as you scroll. Height and text colour stay put — only
  // the tint changes. The brightness/saturate in the backdrop filter keeps
  // the bar reading light at this low an alpha: without it, dark content
  // passing underneath shows through and the bar looks black instead of
  // transparent.
  const headerBg = useTransform(
    scrollY,
    [0, 160],
    ["rgba(255,255,255,0.72)", "rgba(255,255,255,0.22)"]
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-[48px] backdrop-saturate-[1.6] backdrop-brightness-[1.12]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-xl font-normal tracking-tight text-ink-900 xl:gap-3 xl:text-2xl 2xl:text-[1.75rem]"
          >
            <LogoMark className="h-[1.1em] w-[1.1em] shrink-0" />
            irfan
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <NavLinkRoll key={link.label} to={link.href} label={link.label} scrolled={scrolled} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <div className="flex items-center gap-4 text-lg">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-colors duration-500 hover:text-accent ${
                    scrolled ? "text-ink-700" : "text-ink-400"
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <Link
              to="/#contact"
              className="whitespace-nowrap rounded-full bg-ink-900 px-6 py-3 font-display text-lg font-normal tracking-tight text-white transition-colors hover:bg-accent xl:px-7 xl:text-xl"
            >
              contact us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden -mr-2 p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <MenuToggle open={menuOpen} />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen mobile menu — rendered outside <header> so its `fixed`
          positioning resolves against the viewport, not the header's own
          box (header's backdrop-filter creates a containing block for
          position:fixed descendants). */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 top-[73px] z-40 flex flex-col justify-between bg-white px-6 py-10 overflow-y-auto"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.label} variants={linkVariants} className="border-b border-ink-200 first:pt-0">
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 font-display text-5xl font-normal tracking-tight text-ink-900"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Link
                  to="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block py-5 font-display text-5xl font-normal tracking-tight text-accent"
                >
                  contact
                </Link>
              </motion.div>
            </nav>

            <motion.div variants={linkVariants} className="flex items-center gap-6 pt-10 text-2xl text-ink-400">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-accent">
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
