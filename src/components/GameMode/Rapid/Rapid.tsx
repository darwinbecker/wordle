type RapidProps = {
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Rapid: React.FC<RapidProps> = (props: RapidProps) => {
    return (
        <>
            <h1>Wähle einen Blitz-Modus</h1>
            <div className="item-list">
                <button onClick={props.closePopup} value="1">1 Minute</button>
                <button onClick={props.closePopup} value="3">3 Minutes</button>
                <button onClick={props.closePopup} value="5">5 Minutes</button>
            </div>
        </>
    );

}
