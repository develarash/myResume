import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects";
import Exprience from "./Components/Exprience";
import Educatios from "./Components/Educatios";
import Navigation from "./Components/Navigation";
import Questions from "./Components/Question";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
  <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Exprience" element={<Exprience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Educatios" element={<Educatios />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/news" element={<News />} />

        </Routes>
    </div>
  );
}

export default App;
