import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Exprience from "./Components/Exprience";
import Educatios from "./Components/Educatios";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
  <Navigation/>
      <div className="contect">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Exprience" element={<Exprience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Educatios" element={<Educatios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
