import Architektur from "../../../static/categoryIcons/Architektur.png";
import Astronomie from "../../../static/categoryIcons/Astronomie.png";
import Biologie from "../../../static/categoryIcons/Biologie.png";
import Botanik from "../../../static/categoryIcons/Botanik.png";
import Chemie from "../../../static/categoryIcons/Chemie.png";
import Essen from "../../../static/categoryIcons/Essen.png";
import Film from "../../../static/categoryIcons/Film.png";
import Geographie from "../../../static/categoryIcons/Geographie.png";
import IT from "../../../static/categoryIcons/IT.png";
import Jura from "../../../static/categoryIcons/Jura.png";
import Mathe from "../../../static/categoryIcons/Mathe.png";
import Medizin from "../../../static/categoryIcons/Medizin.png";
import Musik from "../../../static/categoryIcons/Musik.png";
import Physik from "../../../static/categoryIcons/Physik.png";
import Religion from "../../../static/categoryIcons/Religion.png";
import Sport from "../../../static/categoryIcons/Sport.png";
import Sprache from "../../../static/categoryIcons/Sprache.png";
import Technik from "../../../static/categoryIcons/Technik.png";
import Tiere from "../../../static/categoryIcons/Tiere.png";
import { Category } from "../../../types/Category";
import { usePopup } from "../../Context/Popup/Popup";
import wordlistData from "../../../config/database/categories.json";

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

type CategoriesProps = {
  setCategory: (category: Category) => void;
  setCurrentDictionary: (dictionary: object) => void;
};

export const Categories: React.FC<CategoriesProps> = (
  props: CategoriesProps
) => {
  const { unSetPopupContent } = usePopup();

  const categories: Category[] = [
    "architecture",
    "astronomy",
    "biology",
    "botany",
    "chemistry",
    "food",
    "movie",
    "geography",
    "it",
    "law",
    "maths",
    "medicine",
    "music",
    "physics",
    "religion",
    "sport",
    "language",
    "tech",
    "animals",
  ];

  function getIcon(category: string): string {
    if (category === "architecture") {
      return Architektur;
    } else if (category === "astronomy") {
      return Astronomie;
    } else if (category === "biology") {
      return Biologie;
    } else if (category === "botany") {
      return Botanik;
    } else if (category === "chemistry") {
      return Chemie;
    } else if (category === "food") {
      return Essen;
    } else if (category === "movie") {
      return Film;
    } else if (category === "geography") {
      return Geographie;
    } else if (category === "it") {
      return IT;
    } else if (category === "law") {
      return Jura;
    } else if (category === "maths") {
      return Mathe;
    } else if (category === "medicine") {
      return Medizin;
    } else if (category === "music") {
      return Musik;
    } else if (category === "physics") {
      return Physik;
    } else if (category === "religion") {
      return Religion;
    } else if (category === "sport") {
      return Sport;
    } else if (category === "language") {
      return Sprache;
    } else if (category === "tech") {
      return Technik;
    } else if (category === "animals") {
      return Tiere;
    } else {
      return "";
    }
  }

  return (
    <>
      <h1>Wähle eine Kategorie</h1>
      <div className="item-list">
        {categories.map((category) => {
          return (
            <button
              className="category-button"
              onClick={(e) => {
                const category: Category = e.currentTarget.value as Category;
                console.log(category);
                props.setCategory(category);
                console.log(wordlistData[category]);
                props.setCurrentDictionary(wordlistData[category]);
                unSetPopupContent();
              }}
              key={category}
              value={category}
            >
              <img src={getIcon(category)} alt={category} />
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};
