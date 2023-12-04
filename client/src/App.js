import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Blackbar from "./components/Blackbar";
import Values from "./components/Values";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Blackbar />
      <Values />
      <Projects />
    </div>
  );
}

export default App;
