import { PROJECTS, PERSONAL_PROJECTS } from "../constants"
import ProjectShowcase from "./ProjectShowcase"
import SectionHeading from "./SectionHeading"

const Projects = () => {
  return (
    <div id="projects" className="border-t border-ink-200 py-24">
      <SectionHeading kicker="Selected work" title="Featured projects" />
      <ProjectShowcase projects={PROJECTS} />

      <div className="mt-24">
        <SectionHeading kicker="Side projects" title="Personal projects" />
        <ProjectShowcase projects={PERSONAL_PROJECTS} />
      </div>
    </div>
  )
}

export default Projects
