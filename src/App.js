import './App.css';
import {Buttons} from './components/Buttons'
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Trip_Planning from "./components/Trip_Planning";

const horCenter = {display: 'flex', alignItems: 'center', justifyContent: 'center'}
const App = () => {
  return (
    <div className="App">
        <div style={horCenter}>
            <h1>ToronnoForYou❣️</h1>
        </div>

        <div style={horCenter}>
            <h2> Your one-stop-shop for all things Toronto Transit</h2>
        </div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Buttons/>
        </div>

        <Routes>
            <Route path="/trip-planning" element={<Trip_Planning/>}></Route>
        </Routes>
    </div>
  );
};

export default App;