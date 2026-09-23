import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Grid of clickable project cards — rounded cover, title + one-line
 * tagline below, "view case" reveal on hover. Each card routes to its
 * own case-study page at /work/:slug (mirrors tubikstudio.com/works/*).
 */
const ProjectShowcase = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
      {projects.map((project, idx) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 2) * 0.1 }}
        >
          <Link to={`/work/${project.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-6xl font-medium text-ink-200 select-none">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

              <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                view case
                <ArrowUpRight size={14} />
              </span>
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl lg:text-[clamp(1.5rem,2.2vw,2.25rem)] font-light leading-[0.95] text-ink-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-ink-400">{project.tagline}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="mt-1 flex-shrink-0 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
