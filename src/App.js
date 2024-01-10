// import logo from './logo.svg';
import "./App.scss";
// import Layout from "./components/Layout/index.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Contact  from "./components/About/about";
import Projects from "./components/Contact/contact";
import Layout from "./components/layout/index.js";
import Skills from "./components/Skills/skills.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
