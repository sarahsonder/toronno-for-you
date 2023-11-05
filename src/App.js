import './App.css';
import {Buttons} from './buttons'

function App() {
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
    </div>
  );
}

export default App;
