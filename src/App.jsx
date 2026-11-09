import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const sections = ["skills", "beyond", "contact"];

export default function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />

      <main id="top" className="min-w-0 flex-1">
        <Hero />
        <About />
        <Projects />
        {sections.map((id) => (
          <section
            key={id}
            id={id}
            className="flex min-h-[60vh] items-center justify-center border-t border-line"
          >
            <h2 className="font-serif text-5xl capitalize text-ink">{id}</h2>
          </section>
        ))}
      </main>
    </div>
  );
}
