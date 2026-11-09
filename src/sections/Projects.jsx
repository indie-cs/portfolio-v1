import React from 'react'
import SectionLabel from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-8 border-t border-line px-6 py-16 md:px-14">
      <SectionLabel>SELECTED PROJECTS</SectionLabel>
      <div className="grid grid-cols-[repeat(auto-fit, minmax(280px,1fr))] gap-5">
        {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
)
}

export default Projects