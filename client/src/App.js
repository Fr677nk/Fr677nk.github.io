import "./styles/App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Blackbar from "./components/Blackbar";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

const panelMarkers = [
  600,
  1100,
  2200,
  3200
];

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
    if (position < panelMarkers[0]) setCurrPage(0);
    if (position > panelMarkers[0] && position < panelMarkers[1]) setCurrPage(1);
    if (position > panelMarkers[1] && position < panelMarkers[2]) setCurrPage(2);
    if (position > panelMarkers[2] && position < panelMarkers[3]) setCurrPage(3);
    if (position > panelMarkers[3]) setCurrPage(4);
  };

  return (
    <div className="App" id="Appid">
      <Navbar />
      <Overlay currentPage={currPage}  panelMarkers={panelMarkers}/>
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
