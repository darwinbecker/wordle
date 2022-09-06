import { SnackbarProvider } from "notistack";
import "./App.css";
import { GamestateProvider } from "./components/Context/Gamestate/Gamestate";
import { InputProvider } from "./components/Context/Input/Input";
import { PopupProvider } from "./components/Context/Popup/Popup";
import { StatsProvider } from "./components/Context/Stats/Stats";
import { GameHandler } from "./components/GameHandler";
// import { Main } from './components/Main/Main';

function App() {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <StatsProvider>
        <GamestateProvider>
          <InputProvider>
            <PopupProvider>
              <StatsProvider>
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
                  <GameHandler />
                  <canvas id="confetti-canvas"></canvas>
                </div>
              </StatsProvider>
            </PopupProvider>
          </InputProvider>
        </GamestateProvider>
      </StatsProvider>
    </SnackbarProvider>
  );
}

export default App;
