
type ModeProps = {
    content: string;
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Popup: React.FC<ModeProps> = (props: ModeProps) => {
    return (
        <div className='popup'>
            <div className='popup-content'>
                {props.content == 'categories' && (
                    <>
                        <h2>Wähle eine Kategorie</h2>
                        <div className="categories-list">
                            <button onClick={props.closePopup} value="architectur">Architektur</button>
                            <button onClick={props.closePopup} value="astronomie">Astronomie</button>
                            <button onClick={props.closePopup} value="biologie">Biologie</button>
                            <button onClick={props.closePopup} value="botany">Botanik</button>
                        </div>
                    </>
                )}


                {props.content == 'rapid' && (
                    <>
                        <h2>Wähle einen Rapid-Modus</h2>
                        <div className="categories-list">
                            <button onClick={props.closePopup} value="1">1 Minute</button>
                            <button onClick={props.closePopup} value="3">3 Minutes</button>
                            <button onClick={props.closePopup} value="5">5 Minutes</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

}