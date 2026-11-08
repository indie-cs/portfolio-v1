import React from "react";
import HeroImg from "../assets/images/Hero.webp";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[560px] flex-col justify-center overflow-hidden px-6 py-24 md:px-14"
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-99"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-night via-night/60 to-transparent" />
      <div className="flex max-w-xl flex-col gap-6">
        <p className="flex items-center gap-3.5 text-xs tracking-[0.22em] text-soft">
          HELLO, I'M <span className="h-px w-14 bg-soft/40" />
        </p>
        <h1 className="font-serif text-7xl leading-non font-medium text-ink md:text-9xl">
          Mia<span className="text-sage">.</span>
        </h1>
        <p className="font-serif text-2xl text-ink/90 italic md:text-3xl">
          A developer, a dreamer, a lifelong learner.
        </p>
        <p className="max-w-md text-lg text-soft">
          I build thoughtful, meaningful and aesthetic digital experiences,
          explore new ideas, and turn curiosity into projects.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-sage px-6 text-[15px] font-semibold text-night transition hover:brightness-110"
          >
            Explore my work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full border border-soft/45 px-6 text-[15px] font-medium text-ink transition hover:border-sage hover:text-sage"
          >
            Get in touch{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
