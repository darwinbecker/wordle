import { useSnackbar } from "notistack";
import { useState } from "react";
import { loadHighContrast, saveHighContrast } from "../../../libs/LocalStorage";
import { HighContrastService } from "../../../libs/Observables/HighContrastService";

export const HighContrastButton = () => {
  const [highContrast, setHighContrast] = useState<Boolean>(loadHighContrast());
  const { enqueueSnackbar } = useSnackbar();

  const toggleContrast = (event: React.MouseEvent<HTMLButtonElement>) => {
    const toggleContrast = !highContrast;
    setHighContrast(toggleContrast);
    saveHighContrast(toggleContrast);
    HighContrastService.setHighContrast(toggleContrast);
    enqueueSnackbar(
      "Hohen-Kontrast " + (toggleContrast ? "aktiviert" : "deaktiviert"),
      {
        variant: "info",
        autoHideDuration: 2000,
      }
    );
  };

  return (
    <button
      onClick={toggleContrast}
      style={
        highContrast
          ? {
              color: `var(--high-contrast-correct)`,
              border: `1px solid var(--high-contrast-semi)`,
            }
          : {}
      }
    >
      <i className="fa-solid fa-circle-half-stroke"></i>
    </button>
  );
};
