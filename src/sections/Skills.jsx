import React from "react";
import SectionLabel from "../components/SectionLabel";
import { skillGroups } from "../data/skills";
import Tag from "../components/Tag";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-8 border-t border-line px-6 py-16 md:px-14"
    >
      <SectionLabel>SKILLS &amp; TOOLBOX</SectionLabel>
      <p className="max-w-lg font-serif text-2xl text-ink/90 italic">
        A mix of technical skills and creative tools.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, items }) => (
          <div
            key={title}
            className="flex flex-col gap-3.5 rounded-2xl border border-line bg-panel p-5"
          >
            <h3 className="text-[13px] font-semibold tracking-[0.08] text-sage uppercase">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
