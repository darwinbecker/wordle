import { useState } from "react";
import { loadHighContrast, saveHighContrast } from "../../LocalStorage";
import { HighContrastService } from "../";

export const HighContrastButton = () => {

    const [highContrast, setHighContrast] = useState<Boolean>(loadHighContrast());

    const toggleContrast = (event: React.MouseEvent<HTMLButtonElement>) => {
        const toggleContrast = !highContrast;
        setHighContrast(toggleContrast);
        saveHighContrast(toggleContrast);
        HighContrastService.setHighContrast(toggleContrast);
    }

    return (
        <button onClick={toggleContrast} style={highContrast ? { color: `var(--high-contrast-correct)`, border: `1px solid var(--high-contrast-semi)` } : {}}><i className="fa-solid fa-circle-half-stroke"></i></button>
    );
}
