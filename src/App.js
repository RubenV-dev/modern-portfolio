import './App.css';
import MainContainer from './mainContainer';
import { Routes, Route } from "react-router-dom";
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import NoPage from './components/nopage';
import Home from './components/home'

function App() {
  return (
    <Routes>
      <Route path="/modern-portfolio" element={<MainContainer />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    /* </div> */
  );
}

export default App;
