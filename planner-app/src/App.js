import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body.jsx'
import Title from './components/Title.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Body className="body"></Body>
  )
  /*
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
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
