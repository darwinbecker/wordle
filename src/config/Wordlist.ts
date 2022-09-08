// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/words.ts#L77
export const WORD_OF_THE_DAY = () => {
  const epochMs = new Date(2022, 0).valueOf(); // January 1, 2022 Game Epoch
  const now = Date.now();
  const msInDay = 86400000;
  const timezoneOffset = 18000000; // 5 hours => next word is at 6:00am
  const index = Math.floor((now - timezoneOffset - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs + timezoneOffset;
  // console.log("----WORD_OF_THE_DAY-----");
  // console.log(epochMs);
  // console.log(index);
  // console.log(WORDLIST.length);
  // console.log(index % WORDLIST.length);
  // console.log(WORDLIST[index % WORDLIST.length].toUpperCase());
  // console.log(nextday);
  // console.log(new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)));
  // console.log();

  return {
    solution: WORDLIST[index % WORDLIST.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  };
};

export const getRandomWord = (): string => {
  const random = Math.floor(Math.random() * WORDLIST.length);
  console.log(WORDLIST[random]);
  return WORDLIST[random];
};

export const getRandomWordFromDictionary = (dictionary: object): string => {
  const random = Math.floor(Math.random() * Object.keys(dictionary).length);
  console.log("solution:", Object.keys(dictionary)[random]);
  return Object.keys(dictionary)[random];
};

const WORDLIST = [
  "Abart",
  "Abbau",
  "Abece",
  "Abend",
  "Abgas",
  "Abort",
  "Abruf",
  "Absud",
  "Abtei",
  "abtun",
  "Abweg",
  "Abzug",
  "Achat",
  "Achse",
  "Acker",
  "Addon",
  "adeln",
  "Adept",
  "Adern",
  "adieu",
  "Adler",
  "adlig",
  "Admin",
  "aerob",
  "affig",
  "affin",
  "Affix",
  "After",
  "Agent",
  "Agrar",
  "Ahnen",
  "Ahorn",
  "Aktei",
  "Aktie",
  "aktiv",
  "Aktor",
  "Alarm",
  "Albit",
  "Album",
  "Albus",
  "alert",
  "Algin",
  "Algol",
  "Alias",
  "Alibi",
  "Alien",
  "Alkan",
  "Alken",
  "Alkin",
  "Alkor",
  "Allee",
  "alles",
  "Allod",
  "allzu",
  "Alpen",
  "Alpha",
  "alpin",
  "Alsem",
  "Altan",
  "Altar",
  "Alter",
  "Alula",
  "ambig",
  "Ambra",
  "Ampel",
  "Amsel",
  "Amtei",
  "amten",
  "Anbau",
  "anbei",
  "Anbot",
  "Angel",
  "Anger",
  "Angst",
  "anhin",
  "Anime",
  "Anken",
  "Anker",
  "Anmut",
  "Annex",
  "Anode",
  "ANOVA",
  "Anruf",
  "antik",
  "antun",
  "Anura",
  "Anzug",
  "Aorta",
  "apart",
  "Apero",
  "Apfel",
  "Aphel",
  "Apnoe",
  "April",
  "Apsis",
  "Arber",
  "Areal",
  "Arena",
  "Arete",
  "Argon",
  "Argot",
  "Aries",
  "arkan",
  "Armee",
  "Armer",
  "Armut",
  "Aroma",
  "Array",
  "Arsch",
  "artig",
  "Aruak",
  "Asche",
  "Asien",
  "Aspik",
  "assig",
  "asten",
  "Athen",
  "Atlas",
  "atmen",
  "Atoll",
  "atzen",
  "Audit",
  "Augen",
  "Augur",
  "Aulos",
  "aural",
  "Autor",
  "Avers",
  "Aviso",
  "axial",
  "Axiom",
  "Azubi",
  "Bache",
  "Backe",
  "baden",
  "Bader",
  "Bagel",
  "Bagno",
  "Bahre",
  "Baiji",
  "balde",
  "Balun",
  "banal",
  "Bande",
  "bange",
  "Barbe",
  "Barde",
  "Bares",
  "Barge",
  "Barke",
  "Baron",
  "basal",
  "Basar",
  "Basis",
  "Bauch",
  "bauen",
  "Bauer",
  "Bayer",
  "Beben",
  "Beere",
  "Behuf",
  "beide",
  "beige",
  "Beize",
  "Belag",
  "Beleg",
  "Bemme",
  "Berge",
  "Beruf",
  "Besan",
  "Besen",
  "beten",
  "Beule",
  "Beute",
  "bevor",
  "Bezug",
  "Bibel",
  "Biber",
  "Biene",
  "bienn",
  "Biest",
  "Biker",
  "Bilge",
  "Binde",
  "Binse",
  "Birke",
  "Birma",
  "Birne",
  "Bisam",
  "Bitte",
  "Biwak",
  "Bixin",
  "blank",
  "Blase",
  "blass",
  "Blatt",
  "Blech",
  "Blick",
  "Blide",
  "Blimp",
  "blind",
  "Blitz",
  "Bloch",
  "Block",
  "bloed",
  "blond",
  "bloss",
  "Blues",
  "Bluff",
  "Blume",
  "Blust",
  "Board",
  "Boche",
  "Boden",
  "Bogen",
  "Bohle",
  "Bohne",
  "boeig",
  "Bolid",
  "Bolle",
  "Bombe",
  "Bonus",
  "Bonze",
  "Borax",
  "Borke",
  "Borte",
  "boese",
  "Boson",
  "Botox",
  "Boxen",
  "Boxer",
  "brach",
  "Brand",
  "Braet",
  "Braue",
  "braun",
  "Braut",
  "breit",
  "Brett",
  "Brief",
  "Bries",
  "Brise",
  "Brite",
  "Bruch",
  "Brust",
  "Buche",
  "Buchs",
  "Bucht",
  "Buddy",
  "Buggy",
  "Buehl",
  "Buhne",
  "Bulla",
  "Bulle",
  "Bully",
  "Buren",
  "Burma",
  "Buero",
  "Busch",
  "Busse",
  "Busen",
  "Buesi",
  "Bussi",
  "Buett",
  "Cache",
  "Cameo",
  "Caput",
  "Cargo",
  "Causa",
  "Celit",
  "Cello",
  "Ceres",
  "Cetus",
  "Champ",
  "Chaos",
  "Chaot",
  "Cheat",
  "check",
  "Chemo",
  "Chile",
  "Chili",
  "China",
  "Chips",
  "Chlor",
  "Choke",
  "Chose",
  "Chrom",
  "Cider",
  "circa",
  "Claim",
  "Cloud",
  "Clown",
  "Coach",
  "coden",
  "Coder",
  "Codex",
  "Codon",
  "Combo",
  "Comic",
  "Copal",
  "Corno",
  "Corps",
  "Couch",
  "Cover",
  "Coypu",
  "Crack",
  "Crash",
  "crazy",
  "Credo",
  "Creek",
  "Creme",
  "Cumin",
  "Curry",
  "dabei",
  "Dachs",
  "daher",
  "dahin",
  "Dakar",
  "Dalbe",
  "Dalit",
  "Dalle",
  "dalli",
  "damit",
  "Dampf",
  "Dandy",
  "danke",
  "darin",
  "darob",
  "darum",
  "Datei",
  "Daten",
  "Dativ",
  "Datum",
  "Dauer",
  "Daune",
  "davon",
  "davor",
  "Debet",
  "debil",
  "Decke",
  "Deern",
  "Degen",
  "Deich",
  "deier",
  "Dekan",
  "Dekon",
  "Delhi",
  "Delir",
  "Delle",
  "Delta",
  "Demse",
  "Demut",
  "Denim",
  "Denke",
  "Depot",
  "depri",
  "derbe",
  "desto",
  "detto",
  "devot",
  "Dhaka",
  "Diaet",
  "dicht",
  "Dicke",
  "Diele",
  "diese",
  "Dildo",
  "Dille",
  "Dimli",
  "Dinge",
  "Dingi",
  "Diode",
  "Dirne",
  "Disco",
  "Disko",
  "Dispo",
  "Divis",
  "Diwan",
  "Docke",
  "Dogma",
  "Dohle",
  "Dokdo",
  "dolce",
  "Dolch",
  "Dolly",
  "dolos",
  "Donau",
  "Donut",
  "dopen",
  "Dosis",
  "Doyen",
  "drall",
  "Drama",
  "Drang",
  "drapp",
  "drauf",
  "dreck",
  "Drell",
  "Dress",
  "Drill",
  "Drink",
  "Drive",
  "Droge",
  "Drohn",
  "Drost",
  "Druck",
  "druff",
  "Duell",
  "Duett",
  "dufte",
  "Dukat",
  "Dulli",
  "Dummy",
  "dumpf",
  "Duene",
  "duenn",
  "Dunst",
  "durch",
  "duerr",
  "Durst",
  "Durum",
  "Duese",
  "Dusel",
  "Ebene",
  "ebnen",
  "Echse",
  "eckig",
  "Edikt",
  "Edukt",
  "Effet",
  "ehern",
  "ehren",
  "Eiche",
  "Eidam",
  "Eifer",
  "eigen",
  "eilen",
  "eilig",
  "Eimer",
  "einen",
  "einer",
  "einig",
  "einst",
  "Eisen",
  "eisig",
  "eitel",
  "Eiter",
  "Eklat",
  "eklig",
  "ekrue",
  "ektop",
  "Ekzem",
  "Eland",
  "Elend",
  "Eleve",
  "Elfer",
  "Elite",
  "Eloge",
  "Elter",
  "Elvis",
  "Email",
  "Emoji",
  "empor",
  "emsig",
  "enden",
  "Engel",
  "Enkel",
  "Ennui",
  "enorm",
  "Enter",
  "Enzym",
  "erben",
  "Erbse",
  "erdig",
  "Erika",
  "Erker",
  "Ernst",
  "Ernte",
  "Erpel",
  "erste",
  "Ersti",
  "Esche",
  "Esope",
  "Essay",
  "essen",
  "Essig",
  "Etage",
  "Ethik",
  "Ethin",
  "Ethos",
  "etwas",
  "Eumel",
  "euter",
  "Event",
  "exakt",
  "exlex",
  "Expat",
  "extra",
  "Fabel",
  "Faber",
  "Faden",
  "Faehe",
  "Fahne",
  "Fahrt",
  "faken",
  "Falke",
  "Falle",
  "falls",
  "Falte",
  "famos",
  "Fanal",
  "Farbe",
  "Farce",
  "Farin",
  "Farsi",
  "Faser",
  "fatal",
  "Fatum",
  "Fauna",
  "Faust",
  "Faxen",
  "Fazit",
  "Feber",
  "Feder",
  "fegen",
  "Fehde",
  "Feier",
  "feige",
  "Feind",
  "feist",
  "Felge",
  "Femur",
  "Ferge",
  "Ferne",
  "Ferse",
  "fesch",
  "Feste",
  "Fetus",
  "Feuer",
  "Fiale",
  "Fibel",
  "fidel",
  "Fight",
  "Figur",
  "Filet",
  "Filou",
  "final",
  "Finis",
  "Finne",
  "Finte",
  "Firma",
  "First",
  "Fisch",
  "fixen",
  "Fixer",
  "Fixie",
  "Fixum",
  "Fjord",
  "flach",
  "Flair",
  "Flaum",
  "Fleck",
  "flink",
  "Flint",
  "Flirt",
  "Float",
  "Flora",
  "FLOSS",
  "flott",
  "Floez",
  "Fluch",
  "flugs",
  "Fluid",
  "Fluke",
  "Fluor",
  "Fluse",
  "Fluss",
  "Flyer",
  "Foehn",
  "Foehr",
  "Fokus",
  "Folge",
  "Folie",
  "Fonds",
  "Fonem",
  "Forke",
  "Forle",
  "Forst",
  "Forum",
  "Fotom",
  "Fotze",
  "Foyer",
  "Frack",
  "Frass",
  "Fratz",
  "Fraud",
  "Freak",
  "frech",
  "fremd",
  "Frett",
  "Frist",
  "Fritz",
  "fromm",
  "Front",
  "Frost",
  "frueh",
  "Frunk",
  "Frust",
  "Fuchs",
  "fugen",
  "Fuhre",
  "Furie",
  "Furor",
  "Fusel",
  "Futon",
  "Futur",
  "Gabel",
  "Gabun",
  "Gagel",
  "Galan",
  "Galea",
  "Galle",
  "Galvo",
  "Gamer",
  "Gamet",
  "Ganja",
  "Garbe",
  "garen",
  "Gasse",
  "Gatte",
  "Gaube",
  "Gauch",
  "geben",
  "Geber",
  "Gebet",
  "Gebot",
  "gegen",
  "gehen",
  "Geige",
  "Geiss",
  "Geist",
  "Gelee",
  "Gelse",
  "Gemma",
  "genau",
  "Genie",
  "Genom",
  "Genre",
  "genug",
  "Genus",
  "gerne",
  "Gerte",
  "Geste",
  "getan",
  "Getto",
  "Getue",
  "gGmbH",
  "Ghana",
  "Gicht",
  "Gilde",
  "Gilet",
  "Gimpe",
  "Ginko",
  "Gitte",
  "Gitzi",
  "Gizmo",
  "Gjaid",
  "Glace",
  "Glans",
  "Glanz",
  "glatt",
  "Glefe",
  "Gleis",
  "Gleve",
  "Glick",
  "Glied",
  "Glump",
  "Gluon",
  "Gnade",
  "Gnagi",
  "Gnome",
  "Golem",
  "Gonzo",
  "Gorki",
  "Gosch",
  "Gosse",
  "Gouqi",
  "grade",
  "Grant",
  "Graph",
  "Grebe",
  "Grebt",
  "Grefe",
  "Greif",
  "Greis",
  "grell",
  "Greve",
  "Griff",
  "Grill",
  "Grind",
  "Grips",
  "Groko",
  "Groll",
  "gross",
  "Grube",
  "Gruft",
  "Gruit",
  "gruen",
  "Grund",
  "Gruss",
  "Guano",
  "Gulag",
  "Gully",
  "Gummi",
  "Gunst",
  "Guoyu",
  "GuePl",
  "Gurke",
  "GueST",
  "Gusto",
  "Guete",
  "Gypsy",
  "Gyros",
  "Haare",
  "haben",
  "Habil",
  "Habit",
  "Hacke",
  "Hader",
  "Hades",
  "Hadji",
  "Hafen",
  "Hafte",
  "Hagel",
  "hager",
  "Haide",
  "Haima",
  "Haken",
  "Halde",
  "Halle",
  "Hallo",
  "hallp",
  "Halon",
  "Hamam",
  "Haeme",
  "Handy",
  "Hanoi",
  "Hanse",
  "Happe",
  "Happs",
  "happy",
  "Harem",
  "Harke",
  "Hasch",
  "Hasta",
  "Haube",
  "Hauch",
  "hauen",
  "Hauer",
  "Haupt",
  "heavy",
  "heben",
  "Hebes",
  "Hecht",
  "Hecke",
  "Heels",
  "hegen",
  "Heide",
  "heile",
  "Heini",
  "heiss",
  "Helix",
  "helle",
  "Helot",
  "Hemst",
  "Hendl",
  "Henne",
  "herab",
  "Herde",
  "Heroe",
  "Heros",
  "herum",
  "Hetze",
  "heuer",
  "Heuet",
  "heute",
  "hexen",
  "Hexer",
  "Hicki",
  "Hicks",
  "Hiebe",
  "Hilfe",
  "hinab",
  "Hippe",
  "Hippo",
  "Hirni",
  "Hirse",
  "Hirte",
  "Hitze",
  "Hmong",
  "Hobby",
  "Hobel",
  "Hocke",
  "hockt",
  "Hoden",
  "Hoefe",
  "Hoeft",
  "Hoehe",
  "holen",
  "Homes",
  "honen",
  "Honey",
  "Honig",
  "Hopen",
  "Hopse",
  "Horde",
  "Horst",
  "Hosen",
  "Hotel",
  "Hotte",
  "Hucke",
  "Huker",
  "human",
  "humid",
  "Humor",
  "Huene",
  "Hunni",
  "Hupen",
  "huren",
  "Husch",
  "Husse",
  "huete",
  "Huets",
  "Hutze",
  "Hymen",
  "Hymne",
  "hypen",
  "ideal",
  "ident",
  "Idiom",
  "Idiot",
  "Idyll",
  "Ifrit",
  "igitt",
  "ihrer",
  "Ikone",
  "Ileum",
  "Ileus",
  "Iltis",
  "Image",
  "Imber",
  "Imbus",
  "Imker",
  "immer",
  "immun",
  "Impfe",
  "Inbus",
  "indem",
  "indes",
  "Index",
  "Indik",
  "Indiz",
  "inert",
  "infam",
  "Infix",
  "Infus",
  "Inger",
  "Inlay",
  "innen",
  "innig",
  "Input",
  "Insel",
  "intim",
  "Intro",
  "Ipsch",
  "Irbis",
  "irden",
  "Irrer",
  "irrig",
  "Ische",
  "Islam",
  "Isnik",
  "Ispen",
  "Issue",
  "Itaka",
  "Itzig",
  "iuris",
  "Iwrit",
  "Jacht",
  "Jacke",
  "Jagen",
  "Jalon",
  "Japan",
  "Japse",
  "Jaerv",
  "Jauer",
  "Jause",
  "Jeans",
  "jeden",
  "jeder",
  "Jemen",
  "jener",
  "jenes",
  "Jesus",
  "Jeton",
  "jetzo",
  "jetzt",
  "Joint",
  "Joker",
  "Jokus",
  "Jolle",
  "Jolly",
  "Joppe",
  "Joule",
  "Jubel",
  "Judas",
  "Judiz",
  "Juice",
  "Juist",
  "Jumbo",
  "Junge",
  "Jungs",
  "Junta",
  "juris",
  "Juror",
  "Jurte",
  "Juwel",
  "juxen",
  "Kabel",
  "Kabis",
  "Kabul",
  "Kacke",
  "Kader",
  "Kairo",
  "Kakao",
  "Kakke",
  "Kalle",
  "Kalme",
  "Kamee",
  "Kamel",
  "Kameo",
  "Kamin",
  "Kampf",
  "Kanal",
  "Kanat",
  "Kanin",
  "Kanne",
  "Kanon",
  "Kante",
  "Kaper",
  "Kapok",
  "Kappe",
  "Kapue",
  "Kapuk",
  "Karge",
  "Karre",
  "Karte",
  "Kasch",
  "Kaese",
  "Kassa",
  "Kasse",
  "Kaste",
  "Kastl",
  "Kasus",
  "Katar",
  "Kater",
  "Katze",
  "kauen",
  "Kebab",
  "Kehle",
  "Kehre",
  "Kelch",
  "Kelle",
  "Kelte",
  "Kempo",
  "Kenia",
  "Kenne",
  "Kerak",
  "Kerbe",
  "Kerls",
  "Kerms",
  "Kerub",
  "Kerwa",
  "Kerwe",
  "Kerze",
  "Ketos",
  "Kette",
  "Keule",
  "Khaki",
  "Khmer",
  "Kiada",
  "Kiepe",
  "Kiosk",
  "Kippa",
  "Kippe",
  "Kirbe",
  "kirre",
  "Kirwa",
  "Kiste",
  "Kiten",
  "Klade",
  "Klage",
  "klamm",
  "Klang",
  "Klaps",
  "Klaue",
  "Kleid",
  "klein",
  "Klick",
  "Kliff",
  "Klima",
  "Klipp",
  "Kloss",
  "klott",
  "Klotz",
  "Kluft",
  "Klump",
  "Klunz",
  "Knabe",
  "Knack",
  "Knall",
  "knapp",
  "Knast",
  "Knauf",
  "Knete",
  "Knick",
  "knien",
  "Kniff",
  "Knofi",
  "Knopf",
  "Knorz",
  "Knuff",
  "Knust",
  "Koala",
  "Kobel",
  "Kobra",
  "Kodex",
  "Kohle",
  "Kokon",
  "Kolik",
  "Kolin",
  "Koeln",
  "Kolon",
  "Kombi",
  "Komet",
  "Komik",
  "Komma",
  "Kongo",
  "Konto",
  "Konus",
  "Kopal",
  "Kopie",
  "Koppe",
  "Kopra",
  "Koran",
  "Korea",
  "Korps",
  "Korso",
  "Kotau",
  "koten",
  "kotig",
  "Kotze",
  "Koeze",
  "Krach",
  "Kraft",
  "Krage",
  "Krake",
  "Krams",
  "krank",
  "Krapp",
  "krass",
  "kraus",
  "Kraut",
  "Kraxe",
  "Krebs",
  "Kredo",
  "Kreis",
  "Kreme",
  "Kreol",
  "Kreta",
  "Krete",
  "Kreuz",
  "Krida",
  "Krieg",
  "Krimi",
  "Kripo",
  "Krise",
  "Krone",
  "Kropf",
  "kross",
  "krude",
  "Krull",
  "Krume",
  "krumm",
  "Krupp",
  "Kteis",
  "Kubus",
  "Kugel",
  "kuehl",
  "Kuhle",
  "kuehn",
  "Kumin",
  "Kumme",
  "Kuemo",
  "Kunde",
  "Kunst",
  "Kuper",
  "Kupon",
  "Kuppe",
  "Kurie",
  "Kurre",
  "kurse",
  "Kurve",
  "Kutis",
  "Kutte",
  "Kytos",
  "Label",
  "laben",
  "labil",
  "Labor",
  "Lache",
  "lachs",
  "Lacke",
  "laden",
  "Ladin",
  "Lager",
  "Lakai",
  "Laken",
  "Lampe",
  "lange",
  "Lanze",
  "Lario",
  "Laerm",
  "Larve",
  "lasch",
  "Laser",
  "Lasso",
  "LaTeX",
  "Latte",
  "Laube",
  "Lauch",
  "Lauer",
  "Lauge",
  "Laune",
  "Laute",
  "Lavas",
  "leben",
  "Leber",
  "Leder",
  "ledig",
  "Leere",
  "legal",
  "Legat",
  "legen",
  "leger",
  "Lehen",
  "Lehre",
  "Leier",
  "Leine",
  "leise",
  "Lende",
  "Lenze",
  "Lepra",
  "Lesbe",
  "lesen",
  "letal",
  "letzt",
  "Leute",
  "Level",
  "Levis",
  "Lewat",
  "Lexem",
  "Lexer",
  "Lexik",
  "Libra",
  "Licht",
  "Liebe",
  "Liege",
  "light",
  "liken",
  "Limes",
  "Limit",
  "Linde",
  "Linie",
  "links",
  "Linse",
  "Linux",
  "Lipid",
  "Lippe",
  "Liste",
  "Liter",
  "Litze",
  "Liven",
  "livid",
  "Lobby",
  "loben",
  "Locke",
  "Locus",
  "Logge",
  "Logik",
  "Login",
  "lohen",
  "Lohle",
  "Loehr",
  "Loipe",
  "lokal",
  "Lokus",
  "Lolli",
  "Lorke",
  "losen",
  "Loser",
  "Lotos",
  "Lotse",
  "Louis",
  "Lover",
  "Loewe",
  "loyal",
  "Luchs",
  "Luder",
  "Luffa",
  "Luege",
  "lugen",
  "Lukas",
  "Lulle",
  "Lulli",
  "Lumen",
  "Lunch",
  "Lunge",
  "Lunke",
  "Lunte",
  "Lupus",
  "Lurch",
  "lurig",
  "Luser",
  "luett",
  "Luxor",
  "Luxus",
  "luzid",
  "Lyrik",
  "Lyssa",
  "Macho",
  "Macht",
  "Macis",
  "Macke",
  "Macro",
  "Mafia",
  "Magen",
  "mager",
  "Magie",
  "Magot",
  "Magus",
  "Mahut",
  "Maien",
  "Mainz",
  "Makel",
  "Makro",
  "malad",
  "malen",
  "Maler",
  "Malle",
  "Malta",
  "Malum",
  "Malus",
  "Mamma",
  "Manen",
  "Manga",
  "Manie",
  "Manko",
  "Manna",
  "Manor",
  "Manse",
  "Maori",
  "Mappe",
  "Marge",
  "Marie",
  "marin",
  "Marke",
  "Markt",
  "Maerz",
  "Masch",
  "Masse",
  "Masel",
  "Masen",
  "Maser",
  "Maske",
  "Masse",
  "Masut",
  "Match",
  "Mathe",
  "Matte",
  "Matur",
  "Mauer",
  "Mauke",
  "Maure",
  "Mausi",
  "Mazis",
  "Mecki",
  "Meile",
  "meine",
  "Meise",
  "meist",
  "Mekka",
  "Melis",
  "Memme",
  "Menge",
  "Mensa",
  "Menue",
  "merce",
  "merci",
  "Merks",
  "Messe",
  "Messi",
  "Metal",
  "Meter",
  "Metro",
  "Mette",
  "Metze",
  "Meute",
  "Micro",
  "Miele",
  "Miene",
  "Miese",
  "Miete",
  "Mieze",
  "Mikro",
  "Mikwe",
  "Milbe",
  "Milch",
  "Milde",
  "Milie",
  "Miliz",
  "mimen",
  "Mimik",
  "Mimus",
  "Minga",
  "minim",
  "Minna",
  "Minsk",
  "minus",
  "Miran",
  "Mitte",
  "mixen",
  "Mixer",
  "mobil",
  "modal",
  "Model",
  "Moden",
  "Moder",
  "Modul",
  "Modus",
  "Mogul",
  "Molar",
  "Molly",
  "Monat",
  "Monem",
  "Moped",
  "Moral",
  "Moese",
  "Mosel",
  "Motel",
  "Motiv",
  "Motor",
  "Motte",
  "Motto",
  "Mouse",
  "Mpika",
  "Mucke",
  "Mucks",
  "Mucus",
  "muede",
  "Muffe",
  "Muehe",
  "muhen",
  "Mulde",
  "Muell",
  "Multi",
  "Mumps",
  "murin",
  "Murks",
  "Murta",
  "Musak",
  "Musse",
  "Musel",
  "musig",
  "Musik",
  "Muter",
  "mutig",
  "Mutti",
  "Muzak",
  "Myrte",
  "nabel",
  "Nabob",
  "Nacht",
  "nackt",
  "Nadel",
  "Nadir",
  "Nagel",
  "nagen",
  "Nager",
  "Naehe",
  "nahen",
  "Nahur",
  "Namen",
  "Nancy",
  "Nanny",
  "Narbe",
  "Narde",
  "nasal",
  "nasch",
  "Natel",
  "Natem",
  "Nates",
  "nativ",
  "Natur",
  "Nebel",
  "neben",
  "nebst",
  "Neger",
  "Nepal",
  "Neuer",
  "Neume",
  "Nexus",
  "nicht",
  "Nicki",
  "Niete",
  "Niger",
  "Ninja",
  "Ninpo",
  "Niton",
  "nobel",
  "Noeck",
  "Nocke",
  "Noich",
  "Nomen",
  "Nonne",
  "Notar",
  "Noete",
  "Noten",
  "Notiz",
  "Novum",
  "Nubuk",
  "Nugat",
  "Nuggi",
  "Nulpe",
  "nuten",
  "Nutte",
  "Obers",
  "Obhut",
  "Occhi",
  "Ochse",
  "Ocken",
  "odeln",
  "oedem",
  "Odeur",
  "offen",
  "OHCHR",
  "Oheim",
  "oehmd",
  "Okapi",
  "Oldie",
  "oelen",
  "oelig",
  "Omama",
  "Ombud",
  "Onkel",
  "onset",
  "Opfer",
  "Ophit",
  "Opium",
  "oePNV",
  "Optik",
  "Orbit",
  "Ordal",
  "Orden",
  "Order",
  "Organ",
  "Orgel",
  "Orgon",
  "Orkan",
  "Orkus",
  "Orlog",
  "Orlop",
  "Ornat",
  "orten",
  "Oscar",
  "Oschi",
  "Osten",
  "Otter",
  "Ouija",
  "outen",
  "Ozean",
  "Pacht",
  "Pager",
  "Paket",
  "Palme",
  "Pampa",
  "Pampe",
  "Panel",
  "Panik",
  "Panne",
  "Papat",
  "Papel",
  "Paper",
  "Pappe",
  "Papst",
  "parat",
  "Paria",
  "Paris",
  "Parka",
  "Parte",
  "Party",
  "Pasak",
  "Passe",
  "Pasta",
  "Paste",
  "Patch",
  "Patin",
  "Patte",
  "Pause",
  "Pedal",
  "Pedro",
  "Pedum",
  "Pegel",
  "Pelle",
  "Penis",
  "Penne",
  "perdu",
  "Perle",
  "Perso",
  "pesen",
  "Petar",
  "Peter",
  "Petuh",
  "Petze",
  "Pfahl",
  "Pfalz",
  "Pfand",
  "Pferd",
  "Pfote",
  "Pfuhl",
  "Pfund",
  "Phage",
  "Phase",
  "phatt",
  "Piano",
  "Piece",
  "Pieks",
  "Piese",
  "Pieta",
  "Pigge",
  "piken",
  "Pille",
  "Pilot",
  "Pimpf",
  "Pinie",
  "Pinke",
  "Pinne",
  "Pinte",
  "Pinus",
  "Piotr",
  "Pirat",
  "Pirol",
  "Pisee",
  "Pisse",
  "Piste",
  "Piter",
  "Pitze",
  "Pixel",
  "Pizza",
  "Pjotr",
  "Plage",
  "Plane",
  "Plast",
  "platt",
  "Platz",
  "Playa",
  "Plebs",
  "Plent",
  "Plins",
  "Plinz",
  "plump",
  "Pluto",
  "Podex",
  "pofen",
  "Pokal",
  "polar",
  "Polei",
  "Polen",
  "Polio",
  "Polyp",
  "Ponor",
  "Ponte",
  "Popel",
  "Porre",
  "Porto",
  "posen",
  "Posse",
  "Power",
  "Praha",
  "Praia",
  "prall",
  "Prana",
  "Prank",
  "Preis",
  "Priem",
  "prima",
  "Prinz",
  "Prise",
  "Probe",
  "Profi",
  "Proll",
  "Prolo",
  "Promi",
  "Prosa",
  "Protz",
  "Provo",
  "Proxy",
  "Prunk",
  "Pudel",
  "Puder",
  "pulen",
  "Pulka",
  "Pulle",
  "Pulli",
  "Pulpa",
  "Pulpe",
  "Pumpe",
  "Pumps",
  "Punkt",
  "Punze",
  "Puppe",
  "Purim",
  "Pussy",
  "Puste",
  "Puter",
  "Puett",
  "Puetz",
  "Putze",
  "Pylon",
  "Pyrit",
  "Qanat",
  "Quali",
  "Qualm",
  "Quant",
  "Quark",
  "Quarz",
  "quasi",
  "Qubit",
  "Queen",
  "queer",
  "Quell",
  "Quere",
  "Queue",
  "Quirl",
  "Quito",
  "quitt",
  "Quote",
  "Rabag",
  "Rabat",
  "Rabbi",
  "Raben",
  "Rache",
  "Radar",
  "Radau",
  "Radio",
  "Radix",
  "Radon",
  "ragen",
  "Raife",
  "Rakel",
  "Rambo",
  "Rampe",
  "Ranch",
  "Rande",
  "Ranen",
  "Ranfl",
  "Ranft",
  "Range",
  "rapid",
  "Rappe",
  "rasch",
  "Rasen",
  "Rasse",
  "Rasur",
  "Ratel",
  "raten",
  "Ratio",
  "Rauch",
  "Raufe",
  "Rauke",
  "Raupe",
  "Raute",
  "Rayon",
  "Reala",
  "Realo",
  "Rebbe",
  "Rebus",
  "Recht",
  "Recke",
  "recte",
  "recto",
  "reden",
  "Reede",
  "reell",
  "Regal",
  "Regat",
  "Regel",
  "Regen",
  "Regie",
  "reich",
  "Reide",
  "Reien",
  "Reife",
  "Reihe",
  "Reise",
  "Reite",
  "Remis",
  "renal",
  "Renee",
  "Rente",
  "resch",
  "Reset",
  "Reste",
  "retro",
  "reuig",
  "Reval",
  "Rhein",
  "Ricin",
  "Ricke",
  "Riefe",
  "Riege",
  "Riese",
  "Rigor",
  "Rille",
  "Rinde",
  "Rinne",
  "Rispe",
  "Ritus",
  "Ritze",
  "Rizin",
  "Robbe",
  "Robot",
  "Rodel",
  "roden",
  "Rolle",
  "Rolli",
  "Rollo",
  "Roman",
  "Ronde",
  "rosig",
  "Roter",
  "Rotte",
  "Rotze",
  "Route",
  "Rowdy",
  "royal",
  "Ruebe",
  "Rubel",
  "Rubia",
  "ruede",
  "Rudel",
  "Ruder",
  "Ruefe",
  "rufen",
  "Ruege",
  "ruhen",
  "ruhig",
  "Ruine",
  "Rumpf",
  "Runde",
  "Ruppe",
  "rural",
  "Russe",
  "Ruste",
  "Rutte",
  "Sacco",
  "Sacha",
  "Sache",
  "Sachs",
  "sacht",
  "saeen",
  "Saege",
  "sagen",
  "Sager",
  "sagte",
  "Sahne",
  "Sakko",
  "Salat",
  "Salbe",
  "Saldo",
  "Sales",
  "Salix",
  "Salon",
  "Salto",
  "salue",
  "Salut",
  "Salve",
  "Samen",
  "Samer",
  "Sanaa",
  "sanft",
  "Sanka",
  "Sappe",
  "Sarde",
  "Sasse",
  "Satan",
  "Satyr",
  "Sauce",
  "sauer",
  "Sauna",
  "Sause",
  "Schaf",
  "Schah",
  "schal",
  "Scham",
  "Schar",
  "Schas",
  "Schau",
  "Scheu",
  "Schmu",
  "schon",
  "Schot",
  "Schub",
  "Schuh",
  "Schur",
  "Scoop",
  "sechs",
  "Seele",
  "Segel",
  "Segen",
  "sehen",
  "Seher",
  "Seide",
  "Seife",
  "Seihe",
  "seine",
  "Seite",
  "Sekte",
  "selig",
  "Semer",
  "Semit",
  "Senat",
  "Senge",
  "senil",
  "Senke",
  "Seoul",
  "Serie",
  "Serum",
  "Sexen",
  "Sexus",
  "Shirt",
  "Shoah",
  "SIADH",
  "Sibiu",
  "Sicht",
  "Siena",
  "Silbe",
  "Silex",
  "Sinti",
  "Sippe",
  "Sirup",
  "Sitte",
  "Skala",
  "Skalp",
  "Skull",
  "Skunk",
  "Slang",
  "Slash",
  "sleep",
  "Slick",
  "SloMo",
  "smart",
  "SMSen",
  "Smurf",
  "Smuta",
  "Snack",
  "Snare",
  "Sofia",
  "sogar",
  "Sohle",
  "solch",
  "somit",
  "Sonar",
  "Sonde",
  "Sonne",
  "sonor",
  "sonst",
  "sooft",
  "Sopor",
  "Sorge",
  "sorry",
  "Sorte",
  "Sosse",
  "Sound",
  "sowas",
  "sowie",
  "Sozis",
  "Space",
  "spack",
  "Spahl",
  "Spalt",
  "Spann",
  "Spass",
  "Spass",
  "Spast",
  "spaet",
  "Spatz",
  "Speck",
  "Speed",
  "Speer",
  "Speik",
  "Speil",
  "Speis",
  "Spelt",
  "Spelz",
  "Spezi",
  "Spezl",
  "Spiel",
  "Spill",
  "SPINA",
  "Spind",
  "Spint",
  "Spion",
  "spitz",
  "Split",
  "Spork",
  "Sport",
  "Spott",
  "Spreu",
  "Sprit",
  "Sprue",
  "Spule",
  "Spund",
  "Spurt",
  "Spusi",
  "Squaw",
  "Staat",
  "Stabi",
  "Stack",
  "Stadt",
  "Stage",
  "Stahl",
  "Stall",
  "Stamm",
  "Stand",
  "Stapi",
  "stark",
  "starr",
  "Start",
  "Stase",
  "Stasi",
  "Staub",
  "Steak",
  "Steba",
  "steif",
  "Steig",
  "steil",
  "Stein",
  "Stele",
  "Steno",
  "Stent",
  "Stenz",
  "Stepp",
  "Stern",
  "Sterz",
  "stets",
  "Stewi",
  "Stich",
  "Stick",
  "Stiel",
  "Stier",
  "Stift",
  "STIKO",
  "still",
  "Stino",
  "Stips",
  "Stock",
  "Stoff",
  "stolz",
  "Stoma",
  "stomt",
  "Stopp",
  "Store",
  "Story",
  "Stoss",
  "Strad",
  "Strat",
  "Streb",
  "Strip",
  "Strom",
  "Stube",
  "Stubi",
  "Stuck",
  "Studi",
  "Stufe",
  "Stuff",
  "Stuhl",
  "Stuka",
  "stumm",
  "Stunk",
  "Sturm",
  "Sturz",
  "Stuss",
  "Stute",
  "Stutz",
  "StVZO",
  "Style",
  "Suada",
  "Suade",
  "Suche",
  "Sucht",
  "Sucre",
  "Sudan",
  "Sudel",
  "Sufik",
  "Suite",
  "Sujet",
  "Summe",
  "Sumpf",
  "Sumse",
  "super",
  "Suppe",
  "suren",
  "suess",
  "Swift",
  "Sysop",
  "Szene",
  "Tabak",
  "Tacho",
  "Tadel",
  "Tafel",
  "tagen",
  "Taiga",
  "Taler",
  "Talje",
  "Talus",
  "Tamil",
  "Tanga",
  "Tango",
  "Tanke",
  "Tanne",
  "Tante",
  "Tarif",
  "Tartu",
  "Taser",
  "Tasse",
  "Taste",
  "Taten",
  "Tatze",
  "tauen",
  "Tausi",
  "Taxis",
  "Taxon",
  "Taxus",
  "Teddy",
  "Teeei",
  "Teich",
  "Teile",
  "teils",
  "Teint",
  "Telex",
  "Telko",
  "Tempo",
  "Tenne",
  "Tenno",
  "Tenor",
  "Terra",
  "Tesla",
  "Tetra",
  "teuer",
  "Teuto",
  "Thein",
  "Theke",
  "Thema",
  "Theme",
  "These",
  "Thing",
  "Thron",
  "Tiara",
  "Tibet",
  "Tibia",
  "Tiden",
  "Tiefe",
  "Tiere",
  "Tiger",
  "Tilde",
  "Tilia",
  "Timer",
  "Timur",
  "Tinea",
  "Tippo",
  "Tisch",
  "Titan",
  "Titel",
  "Titer",
  "Titte",
  "Toast",
  "Tobak",
  "toben",
  "Toddy",
  "Todel",
  "Toeff",
  "tofte",
  "Token",
  "Tokio",
  "Tokyo",
  "Toele",
  "Tolle",
  "Tomis",
  "Tommy",
  "Tomoi",
  "Tonne",
  "Tonus",
  "Topik",
  "Topor",
  "Topos",
  "Toern",
  "Torso",
  "Torte",
  "tosen",
  "total",
  "Totem",
  "Toter",
  "Touch",
  "Touri",
  "Tower",
  "Toxin",
  "Trabi",
  "Track",
  "Trade",
  "Trafo",
  "Trage",
  "Trakt",
  "Tramp",
  "Trank",
  "Trara",
  "Trash",
  "Traum",
  "traut",
  "Treck",
  "Treff",
  "Trema",
  "Trend",
  "Treue",
  "Triac",
  "Trias",
  "Trick",
  "Trieb",
  "Trift",
  "Trine",
  "trist",
  "Tritt",
  "Troer",
  "Troll",
  "Tross",
  "Trost",
  "Trott",
  "Trotz",
  "trueb",
  "Truck",
  "Truhe",
  "Trunk",
  "Trupp",
  "Trust",
  "Trute",
  "Tsuba",
  "Tsuga",
  "Tucke",
  "Tulpe",
  "Tumor",
  "tunen",
  "Tunis",
  "Tunke",
  "Tuppe",
  "Turbo",
  "Tuere",
  "Tusse",
  "Tussi",
  "Tuete",
  "Tutor",
  "Tweet",
  "Twill",
  "Twist",
  "Tylom",
  "Typus",
  "uebel",
  "ueben",
  "ueber",
  "Uboot",
  "Udine",
  "UdSSR",
  "Ulcus",
  "ulken",
  "ulkig",
  "Ulkus",
  "Ultra",
  "Uluru",
  "umami",
  "Umbau",
  "Umber",
  "Umbra",
  "Umweg",
  "Umzug",
  "Unart",
  "unbar",
  "Unfug",
  "ungut",
  "Union",
  "Unken",
  "Unmut",
  "Unrat",
  "unsre",
  "Untat",
  "unten",
  "unter",
  "untot",
  "uppen",
  "Urahn",
  "uralt",
  "urban",
  "urbar",
  "Urial",
  "Uroma",
  "Uropa",
  "Urtyp",
  "Usanz",
  "utzen",
  "Uvula",
  "Vaduz",
  "vapen",
  "Varia",
  "Vario",
  "Varix",
  "Vater",
  "vegan",
  "Venus",
  "Verdi",
  "verso",
  "Verum",
  "Verve",
  "Vesen",
  "Vespa",
  "Vesta",
  "Video",
  "Viech",
  "viele",
  "vigil",
  "Villa",
  "Vinca",
  "Viola",
  "Viole",
  "Viper",
  "viral",
  "Virga",
  "Virgo",
  "viril",
  "Viron",
  "Virus",
  "Visum",
  "Visur",
  "Visus",
  "vital",
  "Vlasi",
  "Vlies",
  "Vogel",
  "Voigt",
  "Voile",
  "Vokal",
  "volar",
  "Voelk",
  "Volks",
  "Volte",
  "vorab",
  "voran",
  "vorig",
  "vorne",
  "voten",
  "Votum",
  "Votze",
  "Voxel",
  "vulgo",
  "Vulva",
  "Waage",
  "Waari",
  "Wache",
  "Wachs",
  "Wacht",
  "Wafer",
  "Waffe",
  "Wagen",
  "Wagon",
  "Waise",
  "Walze",
  "Wampe",
  "Wange",
  "Wanne",
  "Wanst",
  "Wanze",
  "Waren",
  "Warte",
  "warum",
  "Warve",
  "Warze",
  "waten",
  "Watte",
  "weben",
  "Weber",
  "Wedel",
  "wegen",
  "wehen",
  "weich",
  "Weide",
  "Weihe",
  "Weile",
  "weiss",
  "weise",
  "Weite",
  "Welle",
  "Welpe",
  "Wende",
  "wenig",
  "wenns",
  "Werft",
  "Werst",
  "Werte",
  "Werth",
  "Wesen",
  "Wespe",
  "Wessi",
  "Weste",
  "Wette",
  "Wicht",
  "wider",
  "Widum",
  "Wiege",
  "Wiese",
  "Wiesn",
  "wieso",
  "Wille",
  "Wilna",
  "Winde",
  "Wippe",
  "Wisch",
  "Witwe",
  "wobei",
  "Woche",
  "Wodka",
  "wogen",
  "woher",
  "Wolke",
  "Wolle",
  "womit",
  "Wonne",
  "Wootz",
  "woran",
  "Wotan",
  "wovon",
  "Wrack",
  "Wruke",
  "Wuchs",
  "Wucht",
  "Wulst",
  "Wumme",
  "wumpe",
  "Wunde",
  "wurde",
  "Wuerm",
  "Wurst",
  "wuest",
  "Xanax",
  "Xanny",
  "Xenon",
  "Xylem",
  "Xylit",
  "Yacht",
  "Yohur",
  "Zacke",
  "Zaire",
  "Zange",
  "Zeche",
  "Zecke",
  "Zehnt",
  "Zelle",
  "Zelot",
  "Zenit",
  "Zeuge",
  "Zeugs",
  "Zicke",
  "Zider",
  "Ziege",
  "Ziele",
  "Ziese",
  "Zigan",
  "Zille",
  "Zinke",
  "Zinne",
  "Zippe",
  "Zirbe",
  "zirka",
  "Zirpe",
  "Zitat",
  "zivil",
  "zonal",
  "Zores",
  "zotig",
  "Zubau",
  "Zuber",
  "Zucht",
  "zudem",
  "zugig",
  "zumal",
  "Zunft",
  "Zunge",
  "Zutat",
  "Zutun",
  "zuvor",
  "Zuzug",
  "Zwang",
  "Zweck",
  "Zweig",
  "Zwerg",
  "Zwirn",
  "Zwist",
];
