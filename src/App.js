import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Trip_Planning from "./components/Trip_Planning";
import LandingPage from "./components/LandingPage";
import Crash_Course from "./components/Crash_Course";
import NavBar from "./components/NavBar";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/trip-planning" element={<Trip_Planning/>}></Route>
            <Route exact path="/crash-course" element={<Crash_Course/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
        </Routes>
    </div>
  );
};

export default App;