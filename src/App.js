import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <html className="App">
       
       <nav>
            <Link to ="/"> Home </Link>
       </nav>

       <nav>
          <Link to ="about"> About </Link>
       </nav>

       <nav>
          <Link to ="projects"> Projects </Link>
       </nav>

        <nav>
          <Link to ="contact"> Contact Me </Link>
        </nav>
        
        <Routes>
          <Route path="/" element = {<Home /> } />
          <Route path="about" element = {<About />} />
          <Route path="projects" element = {<Projects/>} />
          <Route path="contact"  element = {<ContactMe />} />
        </Routes>
      
    </html>
  );
}

export default App;
