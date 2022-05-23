import { SnackbarProvider } from 'notistack';
import React from 'react';
import './App.css';
import { GameHandler } from './components/GameHandler';
// import { Main } from './components/Main/Main';

function App() {
  return (
    
    <SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }} >
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Main></Main> */}
      <GameHandler/>
      <canvas id="confetti-canvas"></canvas>


    </div>
    
    </SnackbarProvider>
  );
}

export default App;
