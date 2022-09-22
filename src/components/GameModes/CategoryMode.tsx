import { useEffect, useState } from "react";
import { getRandomWordFromDictionary } from "../../config/Wordlist";
import { Category } from "../../types/Category";
import { Confetti } from "../Animations";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard/Keyboard";
import { WinService } from "../../libs/Observables/WinService";
import { Categories } from "../PopupContent";

export const CategoryMode = () => {
  const { youLose, setYouLose, youWin, setYouWin, solution, setSolution } =
    useGamestate();
  const { resetGame } = useInput();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  const [category, setCategory] = useState<Category | null>(null);
  const [currentDictionary, setCurrentDictionary] = useState<object | null>(
    null
  );

  const getNextCategoryWord = (): void => {
    resetGame();
    const t = getRandomWordFromDictionary(currentDictionary!);
    // console.log(t);
    setSolution(t);
  };

  // set popup content
  useEffect(() => {
    resetGame();
    setPopupContent(
      <Categories
        setCategory={setCategory}
        setCurrentDictionary={setCurrentDictionary}
      />
    );
    setForceInput(true);
    setAnimationDelay(false);
  }, [setForceInput, setPopupContent, setAnimationDelay, resetGame]);

  // get random solution-word from dictionary
  useEffect(() => {
    if (category !== null && currentDictionary !== null) {
      const randomWord = getRandomWordFromDictionary(currentDictionary);
      setSolution(randomWord);
    }
  }, [category, currentDictionary, setCategory, setSolution]);

  // on win => show confetti
  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      if (win) {
        setYouWin(true);
        Confetti();
      } else {
        setYouLose(true);
        console.log("YOU LOST!");
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [setYouLose, setYouWin]);

  return (
    <>
      <Grid></Grid>
      <Keyboard />

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
