const darkModeKey = 'DarkMode';
type Theme = "light" | "dark";

export const saveDarkMode = (theme: Theme): void => {
    localStorage.setItem(darkModeKey, JSON.stringify(theme));
}

export const loadDarkMode = (): Theme => {
    const theme = localStorage.getItem(darkModeKey);
    return theme ? (JSON.parse(theme) as Theme) : "light"; // set default theme to light
}
