import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./shared/Footer";
import Home from "./component/Home";
import About from "./component/About";
import "./styles/style.scss";
import Education from "./component/Education";
import Project from "./component/Project";
import Contact from "./component/Contact";
import NavbarComponent from "./shared/NavbarComponent";
import useTheme from "./hooks/useTheme";
import Skills from "./component/Skills";
function App() {
  const { mode } = useTheme();
  return (
    <div className={` ${mode}`}>
      <NavbarComponent />

      <Home />
      <About />
      <Project />
      <Skills />
      <Education />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
