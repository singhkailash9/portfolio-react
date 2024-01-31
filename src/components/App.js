import Header from "./Header Footer/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Footer from "./Header Footer/Footer";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import GitHub from "../GitHub/GitHub";
import About from "../components/About/About"

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <GitHub />
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
