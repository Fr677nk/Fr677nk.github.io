import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Blackbar from "./components/Blackbar";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const [currPage, setCurrPage] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (event) => handleScroll(event), {
      passive: true,
    });
    return window.removeEventListener("scroll", (event) => handleScroll(event));
  }, []);

  const handleScroll = (event) => {
    let position = window.scrollY;
    if (position < 600) setCurrPage(0);
    if (position > 600 && position < 1100) setCurrPage(1);
    if (position > 1100 && position < 2200) setCurrPage(2);
    if (position > 2200 && position < 3200) setCurrPage(3);
    if (position > 3200) setCurrPage(4);
  };

  return (
    <div className="App">
      <Navbar />
      <Overlay currentPage={currPage} />
      <Landing />
      <Blackbar />
      <Values />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}

export default App;
