import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects";
import Exprience from "./Components/Exprience";
import Educatios from "./Components/Educatios";
import Navigation from "./Components/Navigation";
import Questions from "./Components/Question";

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
          <Route path="/questions" element={<Questions />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
