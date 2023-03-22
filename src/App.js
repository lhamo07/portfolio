import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./shared/Footer";
import Home from "./component/Home";
import About from "./component/About";
import "./styles/style.scss";
import Resume from "./component/Resume";
import Project from "./component/Project";
import Contact from "./component/Contact";
import NavbarComponent from "./shared/NavbarComponent";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <NavbarComponent />

        <Home />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
