import { createContext, useCallback, useContext, useState } from "react";

export interface IPopUp {
  popupContent: any;
  setPopupContent: (content: any) => void;
}

export const Popup = createContext<IPopUp>({
  popupContent: null,
  setPopupContent: () => {},
});

export const usePopup = () => useContext(Popup);

const popupStyle = {
  bgcolor: "var(--grey)",
  color: "var(--font-color-primary)",
};

export const PopupProvider = (props: any) => {
  const [popupContent, setPopupContent] = useState<any>(null);

  const unSetPopupContent = useCallback(() => {
    setPopupContent(null);
  }, [setPopupContent]);

  return (
    <Popup.Provider
      value={{
        popupContent,
        unSetPopupContent,
      }}
      {...props}
    >
      {props.children}
      {popupContent && (
        // <Dialog open={popupContent != null} onClose={unSetPopupContent}>
        //   <Box sx={popupStyle}>
        //     <DialogContent>{popupContent}</DialogContent>
        //   </Box>
        // </Dialog>
        <></>
      )}
    </Popup.Provider>
  );
};
