import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { ALL_PROJECTS } from "../constants";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const index = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const project = index !== -1 ? ALL_PROJECTS[index] : null;
  const nextProject = project ? ALL_PROJECTS[(index + 1) % ALL_PROJECTS.length] : null;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 sm:px-8 py-32 text-center">
        <p className="text-ink-400">Project not found.</p>
        <Link to="/#projects" className="mt-4 inline-block text-accent font-semibold hover:underline">
          &larr; Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-ink-900 transition-colors"
      >
        <ArrowLeft size={16} />
        All projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8"
      >
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest2 text-ink-400">
          {project.type}
          {project.context ? ` · ${project.context}` : ""}
        </p>
        <h1 className="display-heading mt-4 text-4xl sm:text-5xl lg:text-[clamp(2.5rem,4.5vw,4rem)] text-ink-900">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-ink-500 max-w-2xl">{project.tagline}</p>
      </motion.div>

      {/* Cover */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10 flex justify-center"
      >
        {/* Default: the image keeps its own ratio and natural size, bounded by
            the column width. Opt in with `coverCrop` for portrait art that
            would otherwise shrink to a narrow strip — that gets cropped to a
            full-width banner instead. */}
        {project.video ? (
          /* `preload="metadata"` fetches only the header and first frame, so
             the player shows the clip itself rather than a blank box, while
             the bulk of the file still waits until the visitor presses play. */
          <video
            src={project.video}
            controls
            preload="metadata"
            playsInline
            className="block h-auto w-full max-h-[70vh] rounded-3xl bg-white"
          />
        ) : project.cover || project.image ? (
          project.coverCrop ? (
            <div className="h-[58vh] w-full overflow-hidden rounded-3xl bg-white">
              <img
                src={project.cover || project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <img
              src={project.cover || project.image}
              alt={project.title}
              className="block h-auto w-auto max-h-[70vh] max-w-full rounded-3xl"
            />
          )
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-3xl bg-white">
            <span className="font-display text-8xl font-medium text-ink-200 select-none">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </motion.div>

      {/* Body */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-normal text-ink-900 mb-4">Overview</h2>
          <p className="text-ink-500 leading-relaxed text-base sm:text-lg font-light">
            {project.description}
          </p>

          {project.links?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link, idx) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // First link reads as the primary action, the rest as outlines.
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    idx === 0
                      ? "bg-ink-900 text-white hover:bg-accent"
                      : "border border-ink-300 text-ink-900 hover:border-ink-900"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-3">
              Type
            </p>
            <p className="text-sm text-ink-900">{project.type}</p>
          </div>

          {project.context && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-3">
                Context
              </p>
              <p className="text-sm text-ink-900">{project.context}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Screens — no fixed frames, so each shot renders at its own ratio:
          nothing cropped, letterboxed, or scaled past its native size. */}
      {project.gallery?.length > 0 && (
        <div className="mt-20">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest2 text-ink-400">
            Screens
          </p>
          <div className="flex flex-col gap-12">
            {project.gallery.map((shot, idx) => (
              <motion.figure
                key={shot.src}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={shot.src}
                  alt={shot.caption ? `${project.title} — ${shot.caption}` : project.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="block h-auto w-auto max-h-[80vh] max-w-full rounded-2xl"
                />
                {shot.caption && (
                  <figcaption className="mt-3 text-sm text-ink-400">{shot.caption}</figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      )}

      {/* Next project */}
      {nextProject && (
        <Link
          to={`/work/${nextProject.slug}`}
          className="group mt-24 flex items-center justify-between border-t border-ink-200 pt-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400 mb-2">
              Next project
            </p>
            <p className="font-display text-2xl sm:text-3xl font-normal text-ink-900 group-hover:text-accent transition-colors">
              {nextProject.title}
            </p>
          </div>
          <ArrowRight
            size={24}
            className="flex-shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
      )}
    </div>
  );
};

export default ProjectDetailPage;
