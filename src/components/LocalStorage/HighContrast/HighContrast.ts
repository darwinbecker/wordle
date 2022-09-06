const contrastKey = "HighContrast";

export const saveHighContrast = (active: Boolean): void => {
  localStorage.setItem(contrastKey, JSON.stringify(active));
};

export const loadHighContrast = (): Boolean => {
  const contrast = localStorage.getItem(contrastKey);
  return contrast ? (JSON.parse(contrast) as Boolean) : false; // set default high-contrast-mode to off
};
