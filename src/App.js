import './App.css';
import {Buttons} from './components/Buttons'
import React from 'react';

const horCenter = {display: 'flex', alignItems: 'center', justifyContent: 'center'}
const App = () => {
  return (
    <div>
        <div style={horCenter}>
            <h1>ToronnoForYou❣️</h1>
        </div>

        <div style={horCenter}>
            <h2> Your one-stop-shop for all things Toronto Transit</h2>
        </div>

        <div>
            <Buttons/>
        </div>
    </div>
  );
};

export default App;