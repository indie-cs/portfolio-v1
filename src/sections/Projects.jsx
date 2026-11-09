import React, { useRef } from "react";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const trackRef = useRef(null);
  const scrollByPage = (direction) => {
    const track = trackRef.current;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 border-t border-line px-4 py-16 md:px-14"
    >
      <SectionLabel>SELECTED PROJECTS</SectionLabel>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Previous projects"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line text-soft transition hover:border-sage hover:text-sage"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Next projects"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line text-soft transition hover:border-sage hover:text-sage"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
      ref={trackRef}
      className="grid snap-x snap-mandatory auto-cols-[85%] grid-flow-col gap-5 overflow-x-auto py-2 [scrollbar-width:none] sm:auto-cols-[320px] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
