import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Portfolio from "./components/Portfolio/portfolio";
import Process from "./components/Process/process";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Flatrock1 from "./components/portfolio-sliders/flatrock1";
import Flatrock2 from "./components/portfolio-sliders/flat-rock2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/firm" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flatrock" element={<Flatrock1 />} />
          <Route path="/flatrock2" element={<Flatrock2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
