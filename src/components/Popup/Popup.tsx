import { Categories, Rapid } from '../GameMode';
import { Info, NavType, Stats } from '../Navigation';

type PopupType = 'categories' | 'rapid' | 'nav';

type ModeProps = {
    content: PopupType;
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
    forceInput: boolean;
    navType?: NavType;
}

export const Popup: React.FC<ModeProps> = (props: ModeProps) => {

    const handlePopup = (event: any) => {
        if (!props.forceInput) {
            props.closePopup(event);
        }
    }

    return (
        <div className='popup' onClick={handlePopup}>
            <div className='popup-content'>
                {props.content == 'categories' && (
                    <Categories closePopup={props.closePopup} />
                )}

                {props.content == 'rapid' && (
                    <Rapid closePopup={props.closePopup} />
                )}

                {props.content == 'nav' && (
                    <>
                        {props.navType == 'info' && (
                            <Info />
                        )}

                        {props.navType == 'stats' && (
                            <Stats />
                        )}
                    </>
                )}
            </div>
        </div>
    );

}