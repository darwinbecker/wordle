import classnames from "classnames";
import { createContext, useCallback, useContext, useState } from "react";

export interface IPopUp {
  popupContent: any;
  setPopupContent: (content: any) => void;
  unSetPopupContent: () => void;
  forceInput: boolean;
  setForceInput: (forceInput: boolean) => void;
  animationDelay: boolean;
  setAnimationDelay: (animationDelay: boolean) => void;
}

export const Popup = createContext<IPopUp>({
  popupContent: null,
  setPopupContent: () => {},
  unSetPopupContent: () => {},
  forceInput: false,
  setForceInput: () => {},
  animationDelay: false,
  setAnimationDelay: () => {},
});

export const usePopup = () => useContext(Popup);

const popupStyle = {
  bgcolor: "var(--grey)",
  color: "var(--font-color-primary)",
};

export const PopupProvider = (props: any) => {
  const [popupContent, setPopupContent] = useState<any>(null);
  const [forceInput, setForceInput] = useState<boolean>(false);
  const [animationDelay, setAnimationDelay] = useState<boolean>(false);

  const unSetPopupContent = useCallback(() => {
    setPopupContent(null);
  }, [setPopupContent]);

  const handlePopup = (event: any) => {
    if (!props.forceInput) {
      props.closePopup(event);
    }
  };

  const popupClasses = classnames("popup", {
    "popup-delay": animationDelay === true,
  });

  // const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const navButton = event.currentTarget.value;
  //   if (navButton) {
  //     // if nav button is clicked => set mode
  //     // props.setPopupMode(navButton as PopupType);
  //     setShowNavPopup(!showNavPopup);
  //   } else {
  //     // if popup is visible & user clicks outside of popup window => hide popup
  //     const popup = event.target as HTMLDivElement;
  //     if (popup.classList.contains("popup")) {
  //       // props.setPopupMode(undefined);
  //       setShowNavPopup(!showNavPopup);
  //       // unSetPopupContent();
  //     }
  //   }
  // };

  const togglePopup = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const clickedTarget = event.target as HTMLButtonElement;
    if (clickedTarget.value) {
      unSetPopupContent();
    } else {
      // if popup is visible & user clicks outside of popup window => hide popup
      if (clickedTarget.classList.contains("popup")) {
        if (forceInput) return;
        unSetPopupContent();
      }
    }
  };

  return (
    <Popup.Provider
      value={{
        popupContent,
        setPopupContent,
        unSetPopupContent,
        setForceInput,
        animationDelay,
        setAnimationDelay,
      }}
      {...props}
    >
      {props.children}
      {popupContent && (
        <div className={popupClasses} onClick={togglePopup}>
          <div className="popup-content animate__animated animate__fadeInUp">
            {popupContent}
          </div>
        </div>
      )}
    </Popup.Provider>
  );
};
