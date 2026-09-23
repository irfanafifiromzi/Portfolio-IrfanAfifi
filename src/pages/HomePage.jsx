import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
