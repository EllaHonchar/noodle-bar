import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Team from './Team';
import About from './About';
import Contact from './Contact';
import myLogo from "./myLogo.png";


function App() {
  return <Router>
  <nav>
    <div className="animation">
      <img src={myLogo} alt="card" width="150px" height="150px"/>
    </div> 
    <div className='link-box'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/team" className='link'>Our team</Link>
    <Link to="/about" className='link'>About us</Link>
    <Link to="/Contact" className='link'>Contact us</Link>
    </div>
  </nav>

  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/team" element = {<Team/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>} />
  </Routes>
  </Router>
}
export default App;