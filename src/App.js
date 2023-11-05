import './App.css';

function ButtonNewcomer() {
  return (
      <button style={{ width: "200px", height: "100px", fontSize: "25pt"}}>Crash Course</button>
  )
}

function ButtonMap() {
    return (
        <button style={{ width: "200px", height: "100px", fontSize: "25pt"}}>Trip Planning</button>
    )
}

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
            <ButtonNewcomer />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ButtonMap />
        </div>
    </div>
  );
}

export default App;
