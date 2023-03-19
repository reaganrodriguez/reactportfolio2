import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import User from "./components/User";
import Projects from "./components/Projects";
// import NavBar from "./components/Navbar";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import projectsData from "./jsonfile/projects.json";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/projects"
            element={<Projects name={projectsData} />}
          ></Route>
          <Route path="/projects/*" element={<Project />}></Route>
          <Route path="/projects/:id" element={<Project />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
