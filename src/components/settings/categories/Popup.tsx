import Architektur from '../../../static/categoryIcons/Architektur.png';
import Astronomie from '../../../static/categoryIcons/Astronomie.png';
import Biologie from '../../../static/categoryIcons/Biologie.png';
import Botanik from '../../../static/categoryIcons/Botanik.png';
import Chemie from '../../../static/categoryIcons/Chemie.png';
import Essen from '../../../static/categoryIcons/Essen.png';
import Film from '../../../static/categoryIcons/Film.png';
import Geographie from '../../../static/categoryIcons/Geographie.png';
import IT from '../../../static/categoryIcons/IT.png';
import Jura from '../../../static/categoryIcons/Jura.png';
import Mathe from '../../../static/categoryIcons/Mathe.png';
import Medizin from '../../../static/categoryIcons/Medizin.png';
import Musik from '../../../static/categoryIcons/Musik.png';
import Physik from '../../../static/categoryIcons/Physik.png';
import Religion from '../../../static/categoryIcons/Religion.png';
import Sport from '../../../static/categoryIcons/Sport.png';
import Sprache from '../../../static/categoryIcons/Sprache.png';
import Technik from '../../../static/categoryIcons/Technik.png';
import Tiere from '../../../static/categoryIcons/Tiere.png';

type ModeProps = {
    content: string;
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Architektur: https://www.flaticon.com/free-icon/blueprint_1624005
// Astronomie: https://www.flaticon.com/de/premium-icon/astronomie_2141436
// Biologie: https://www.flaticon.com/de/premium-icon/dna_3207633
// Botanik: https://www.flaticon.com/premium-icon/plants_1703178
// Chemie: https://www.flaticon.com/de/kostenloses-icon/chemie_1156950?related_id=1157001&origin=search
// Essen: https://www.flaticon.com/de/premium-icon/fast-food_3107006
// Film: https://www.flaticon.com/de/kostenloses-icon/klappe_2606028?related_id=2606025&origin=search
// Geographie: https://www.flaticon.com/de/premium-icon/geographie_2847468
// IT: https://www.flaticon.com/premium-icon/science_3044105
// Jura: https://www.flaticon.com/free-icon/compliant_4252299
// Mathe: https://www.flaticon.com/free-icon/calculator_897368
// Medizin: https://www.flaticon.com/free-icon/medicine_655968
// Musik: https://www.flaticon.com/free-icon/guitar_3659784
// Physik: https://www.flaticon.com/de/kostenloses-icon/physik_176024
// Religion: https://www.flaticon.com/de/kostenloses-icon/religion_695882
// Sport: https://www.flaticon.com/de/premium-icon/sport_3311579
// Sprache: https://www.flaticon.com/de/premium-icon/sprachen_3411956
// Technik: https://www.flaticon.com/de/kostenloses-icon/technologie_4152006
// Tiere: https://www.flaticon.com/de/kostenloses-icon/igel_1998675

export const Popup: React.FC<ModeProps> = (props: ModeProps) => {
    return (
        <div className='popup'>
            <div className='popup-content'>
                {props.content == 'categories' && (
                    <>
                        <h1>Wähle eine Kategorie</h1>
                        <div className="categories-list">
                            <button onClick={props.closePopup} value="architecture">
                                <img src={Architektur} alt="Architektur" />
                                Architektur
                            </button>
                            <button onClick={props.closePopup} value="astronomie">
                                <img src={Astronomie} alt="Astronomie" />
                                Astronomie
                            </button>
                            <button onClick={props.closePopup} value="biologie">
                                <img src={Biologie} alt="Biologie" />
                                Biologie
                            </button>
                            <button onClick={props.closePopup} value="botany">
                                <img src={Botanik} alt="Botanik" />
                                Botanik
                            </button>
                            <button onClick={props.closePopup} value="chemistry">
                                <img src={Chemie} alt="Chemie" />
                                Chemie
                            </button>
                            <button onClick={props.closePopup} value="food">
                                <img src={Essen} alt="Essen" />
                                Essen
                            </button>
                            <button onClick={props.closePopup} value="movie">
                                <img src={Film} alt="Film" />
                                Film
                            </button>
                            <button onClick={props.closePopup} value="geographie">
                                <img src={Geographie} alt="Geographie" />
                                Geographie
                            </button>
                            <button onClick={props.closePopup} value="it">
                                <img src={IT} alt="IT" />
                                IT
                            </button>
                            <button onClick={props.closePopup} value="law">
                                <img src={Jura} alt="Jura" />
                                Jura</button>
                            <button onClick={props.closePopup} value="maths">
                                <img src={Mathe} alt="Mathe" />
                                Mathe
                            </button>
                            <button onClick={props.closePopup} value="medicine">
                                <img src={Medizin} alt="Medizin" />
                                Medizin
                            </button>
                            <button onClick={props.closePopup} value="musik">
                                <img src={Musik} alt="Musik" />
                                Musik
                            </button>
                            <button onClick={props.closePopup} value="physics">
                                <img src={Physik} alt="Physik" />
                                Physik
                            </button>
                            <button onClick={props.closePopup} value="religion">
                                <img src={Religion} alt="Religion" />
                                Religion
                            </button>
                            <button onClick={props.closePopup} value="sport">
                                <img src={Sport} alt="Sport" />
                                Sport
                            </button>
                            <button onClick={props.closePopup} value="language">
                                <img src={Sprache} alt="Sprache" />
                                Sprache
                            </button>
                            <button onClick={props.closePopup} value="tech">
                                <img src={Technik} alt="Technik" />
                                Technik
                            </button>
                            <button onClick={props.closePopup} value="animals">
                                <img src={Tiere} alt="Tiere" />
                                Tiere
                            </button>
                        </div>
                    </>
                )}


                {props.content == 'rapid' && (
                    <>
                        <h1>Wähle einen Blitz-Modus</h1>
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