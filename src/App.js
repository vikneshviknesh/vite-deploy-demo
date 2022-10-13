import {useState} from 'react';

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
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={()=>setCount(prevCount=>prevCount+1)}
        >
          Count - {count}
        </a>
      </header>
    </div>
  );
}

export default App;
