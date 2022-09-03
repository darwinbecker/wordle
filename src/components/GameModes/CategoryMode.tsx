import { useEffect, useState } from "react";
import { getRandomWordFromDictionary } from "../../config/Wordlist";
import { Category } from "../../types/Category";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { Categories } from "../PopupContent";

type CategoryModeProps = {
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
};

export const CategoryMode = (props: CategoryModeProps) => {
  const { youLose, youWin, solution, setSolution, resetGame } = useGamestate();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  const [category, setCategory] = useState<Category | null>(null);
  const [currentDictionary, setCurrentDictionary] = useState<object | null>(
    null
  );

  useEffect(() => {
    resetGame();
    // set popup content
    setPopupContent(
      <Categories
        setCategory={setCategory}
        setCurrentDictionary={setCurrentDictionary}
      />
    );
    setForceInput(true);
    setAnimationDelay(false);
  }, [setForceInput, setPopupContent, setAnimationDelay]);

  useEffect(() => {
    if (category !== null && currentDictionary !== null) {
      const randomWord = getRandomWordFromDictionary(currentDictionary);
      setSolution(randomWord);
    }
  }, [category, currentDictionary, setCategory, setSolution]);

  const getNextCategoryWord = (): void => {
    resetGame();
    setSolution(getRandomWordFromDictionary(currentDictionary!));
  };

  // const togglePopup = (event: React.MouseEvent<HTMLButtonElement>): void => {
  //   // TODO: load category dictionary if mode is C, or timer if mode is R
  //   if (gameMode === "C") {
  //     // console.log("load category dictionary");
  //     // console.log(event.currentTarget.value);
  //     const category: Category = event.currentTarget.value as Category;
  //     console.log(category);
  //     // setCurrentDictionary(category);
  //     if (category === "astronomy") {
  //       setCategory("astronomy");
  //       setCurrentDictionary(astronomy);
  //       const solution = getRandomWordFromDictionary(astronomy);
  //       console.log(solution);
  //       setSolution(solution);
  //     }
  //   } else if (gameMode === "R") {
  //     const rapidModeTimerValue = parseInt(event.currentTarget.value);
  //     setRapidMode(rapidModeTimerValue);
  //     const t = new Date().getTime() + rapidModeTimerValue * 60 * 1000;
  //     setTimer(t);
  //   }

  return (
    <>
      <Grid isInputError={props.isInputError}></Grid>

      <Keyboard
        handleChange={props.handleChange}
        handeSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />

      {(youWin || youLose) && (
        <div className="gameover-feedback">
          <button className="next-word" onClick={getNextCategoryWord}>
            nächstes Wort
          </button>
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{solution}</div>
        </div>
      )}
    </>
  );
};
