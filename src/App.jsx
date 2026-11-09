import { Footer } from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Beyond from "./sections/Beyond";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />

      <main id="top" className="min-w-0 flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Beyond />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
