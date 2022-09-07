import classnames from "classnames";
import { useEffect, useState } from "react";
import { WordStatus } from "../../types/WordStatus";
import { loadHighContrast } from "../LocalStorage";
import { HighContrastService } from "../Observables/HighContrastService";

export const WordStatusClassNames = (
  className: string,
  status?: WordStatus
): string => {
  const [contrastMode, setContrastMode] = useState<Boolean>(loadHighContrast());

  useEffect(() => {
    const subscription = HighContrastService.onHighContrastChange().subscribe(
      (isHighContrast) => {
        isHighContrast ? setContrastMode(true) : setContrastMode(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (status) {
    return classnames(className, {
      correct: status === "correct" && !contrastMode,
      "correct-high-contrast": status === "correct" && contrastMode,
      semi: status === "semi" && !contrastMode,
      "semi-high-contrast": status === "semi" && contrastMode,
      wrong: status === "wrong",
    });
  } else {
    return className;
  }
};
