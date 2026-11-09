import React from "react";
import SectionLabel from "../components/SectionLabel";
import { facts, steps } from "../data/about";
import portrait from "../assets/images/portrait.png";
 

function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-10 border-t border-line px-6 py-16 md:px-14"
    >
      <SectionLabel>ABOUT ME</SectionLabel>
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_auto_1fr]">
        {/*Colonne 1 : presentation text*/}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-4xl leading-tight font-medium text-ink md:text-5xl">
            Curious Mind.
            <br />
            <span className="text-sage italic">Creative</span> soul.
          </h2>
          <p className="max-w-md text-soft">
            I'm a Business Analyst and developer, passionate about tech, design
            and storytelling. I understand the need first, then design and build
            the solution, which is why my projects feel both useful and
            beautiful.
          </p>
        </div>
        {/*Colonne 2 : polaroid*/}
        <div className="mx-auto w-52 -rotate-4 bg-[#dcd8cf] p-3 pb-9 shadow-2xl shadow-black/50">
          <div className="grid h-56 place-items-center bg-linear-to-br from-[#26364a] to-[#101a17] text-xs text-muted">
            <img src={portrait} alt="Portrait of Mia" className="h-56 w-full object-cover" />
          </div>
        </div>

        {/*Colonne 3 : infos*/}
        <ul className="flex flex-col gap-5 lg:border-l lg:border-line lg:pl-8">
          {facts.map(({ icon: Icon, lines }) => (
            <li key={lines[0]} className="flex items-center gap-4">
              <Icon
                zise={20}
                strokeWidth={1.5}
                className="shrink-0 text-sage"
              />
              <span className="text-ink">
                {lines.map((line, i) => (
                  <span
                    key={line}
                    className={i > 0 ? "block text-muted" : "block"}
                  >
                    {line}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Comment je travaille*/}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ number, title, text }) => (
          <div
            key={number}
            className="flex flex-col gap-1.5 rounded-2xl border border-line bg-panel p-5"
          >
            <span className="text-xs tracking-[0.18em] text-sage">
              {number}
            </span>
            <h3 className="font-serif text-2xl font-medium text-ink">
              {title}
            </h3>
            <p className="text-sm text-soft">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
