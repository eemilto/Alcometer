import { useState } from 'react';
import './App.css';

function App() {
  return (
<div>
  <h1>Calculating alcohol blood level</h1>
  <label>Weight</label>
  <input type="number"></input>
  <p></p>
  <label>Bottles</label>
  <input type="number"></input>
  <p></p>
  <label>Time</label>
  <input type="number"></input>
  <p>Gender</p>
  <label>Male</label>
  <input type="checkbox"></input>
  <label>Female</label>
  <input type="checkbox"></input>
  <p></p>
  <button>Calculate</button>
</div>
  )
}

export default App;
