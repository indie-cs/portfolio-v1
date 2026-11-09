import React from "react";
import SectionLabel from "../components/SectionLabel";
import {email} from '../data/socials'
import { ArrowRight } from "lucide-react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-start gap-6 border-t border-line bg-[radial-gradient(ellipse_at_20%_100%, rgba(143,209,176,0.1),transparent_60%)] px-6 py-20 md:px-14"
    >
      <SectionLabel>CONTACT</SectionLabel>
      <h2 className="max-w-2xl font-serif text-5xl leading-tight font-medium text-ink md:text-6xl">
        Have an idea? <span className="text-sage italic">Let’s talk.</span>
      </h2>

      <p className="max-w-md text-soft">
        I’m always happy to discuss a project, a collaboration or a good book.
      </p>

      <a
        href={`mailto:${email}`}
        className="inline-flex min-h-13 items-center gap-2.5 rounded-full bg-sage px-8 text-base font-semibold text-night transition hover:brightness-110"
      >
        Say hello
        <ArrowRight size={16} />
      </a>
    </section>
  );
};

export default Contact;
