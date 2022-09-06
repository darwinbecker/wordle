import {
  InfoButton,
  StatsButton,
  SelectGameMode,
  DarkModeButton,
  HighContrastButton,
} from "..";

export const NavigationBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-icons-wrapper">
        <InfoButton />
        <StatsButton />
      </div>

      <SelectGameMode />

      <div className="nav-icons-wrapper">
        <DarkModeButton />
        <HighContrastButton />
      </div>
    </div>
  );
};
