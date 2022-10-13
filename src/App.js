import { useState } from 'react';

import './App.css';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Count - {count}
        </a>
        <button
          onClick={() => setCount(prevCount => prevCount + 1)}
        >
          Increase
        </button>

        <button
          onClick={() => setCount(prevCount => prevCount - 1)}
        >
          Decrease
        </button>
      </header>
    </div>
  );
}

export default App;
