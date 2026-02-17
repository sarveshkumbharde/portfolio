import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}
