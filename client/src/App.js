import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Blackbar from "./components/Blackbar";
import Values from "./components/Values";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Blackbar />
      <Values />
    </div>
  );
}

export default App;
