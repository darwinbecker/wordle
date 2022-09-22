import { useSnackbar } from "notistack";
import { useState } from "react";
import { loadDarkMode, saveDarkMode } from "../../../libs/LocalStorage";

type Theme = "light" | "dark";

export const DarkModeButton = () => {
  const body = document.body;
  const lightTheme: Theme = "light";
  const darkTheme: Theme = "dark";
  const [theme, setTheme] = useState<Theme>(loadDarkMode());
  const { enqueueSnackbar } = useSnackbar();

  const toggleDarkmode = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("toggle darkmode");
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      saveDarkMode(darkTheme);
      setTheme(darkTheme);
    } else {
      body.classList.replace(darkTheme, lightTheme);
      saveDarkMode(lightTheme);
      setTheme(lightTheme);
    }
    enqueueSnackbar(
      "Dunkler-Modus " + (theme === lightTheme ? "aktiviert" : "deaktiviert"),
      {
        variant: "info",
        autoHideDuration: 2000,
      }
    );
  };
  body.classList.add(theme);

  return (
    <button onClick={toggleDarkmode}>
      <i className="fa-solid fa-moon"></i>
    </button>
  );
};
