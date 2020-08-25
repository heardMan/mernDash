import React from 'react';
import logo from './logo.svg';
import LogInButton from './components/LogInButton.js';
import LogOutButton from './components/LogOutButton.js';
import Profile from './components/Profile.js';
// import ExternalAPI from './components/ExternalAPI.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LogInButton/>
        <LogOutButton/>
        <Profile/>
        {/* <ExternalAPI/> */}

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
}

export default App;
