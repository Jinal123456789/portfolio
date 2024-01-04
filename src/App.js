// import logo from './logo.svg';
import "./App.scss";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import About  from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <h1>lkjoij</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
