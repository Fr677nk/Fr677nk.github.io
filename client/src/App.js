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
  return (
    <div className="App">
      <Navbar />
      <Overlay currentPage={currPage} />
      <Landing />
      <Blackbar setCurrPage={() => setCurrPage(0)} />
      <Values setCurrPage={() => setCurrPage(1)} />
      <Projects setCurrPage={() => setCurrPage(2)} />
      <Skills setCurrPage={() => setCurrPage(3)} />
      <ContactForm setCurrPage={() => setCurrPage(4)} />
    </div>
  );
}

export default App;
