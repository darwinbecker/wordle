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
      {/* <i className="fa-solid fa-calendar-day icon"></i>
            <i className="fa-solid fa-dumbbell icon"></i>
            <i className="fa-solid fa-jet-fighter-up icon"></i>
            <i className="fa-solid fa-fire-flame-curved icon"></i> */}

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
