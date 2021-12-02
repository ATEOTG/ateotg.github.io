import logo from './bryandelossantos.png';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import About from "./components/About"
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      
      
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          My Name is Bryan De Los Santos!
        </h1>
        <Routes>
          <Route path="/" element = {<Home /> } />
          <Route path="about" element = {<About />} />
        </Routes>
      
    </div>
  );
}

export default App;
