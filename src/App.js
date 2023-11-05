import './App.css';
import {Buttons} from './components/Buttons'
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Trip_Planning from "./components/Trip_Planning";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/trip-planning" element={<Trip_Planning/>}></Route>
        </Routes>
    </div>
  );
};

export default App;