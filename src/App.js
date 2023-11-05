import './App.css';
import {Buttons} from './buttons'
import React from 'react';
import Map from './components/Map'

const App = () => {
  return (
    <div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>ToronnoForYou❣️</h1>
        </div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}><h2> Your one-stop-shop for all things Toronto Transit</h2></div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Buttons/>
        </div>

        <div>
            <Map/>
        </div>
    </div>
  );
};

export default App;