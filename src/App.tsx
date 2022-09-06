import { SnackbarProvider } from "notistack";
import "./App.css";
import { GamestateProvider } from "./components/Context/Gamestate/Gamestate";
import { InputProvider } from "./components/Context/Input/Input";
import { PopupProvider } from "./components/Context/Popup/Popup";
import { StatsProvider } from "./components/Context/Stats/Stats";
import { GameHandler } from "./components/GameHandler";

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
