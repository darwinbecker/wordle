// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/words.ts#L77
export const WORD_OF_THE_DAY = () => {
  const epochMs = new Date(2022, 0).valueOf(); // January 1, 2022 Game Epoch
  const now = Date.now();
  const msInDay = 86400000;
  // const timezoneOffset = 18000000; // 5 hours => next word is at 6:00am
  const timezoneOffset = 0; // 0 hours => next word is at 0:00am
  const index = Math.floor((now - timezoneOffset - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs + timezoneOffset;

  // what is the solution word in 26 days from now?
  // const indexNew = Math.floor((now - timezoneOffset - epochMs) / msInDay) + 26;
  // WORDLIST[indexNew % WORDLIST.length].toUpperCase()

  // What is the date in 26 days from now?
  // const date = new Date(epochMs + indexNew * msInDay + timezoneOffset);

  return {
    solution: WORDLIST[index % WORDLIST.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
    solutionYesterday: WORDLIST[(index - 1) % WORDLIST.length].toUpperCase(),
  };
};

export const getRandomWord = (): string => {
  const random = Math.floor(Math.random() * WORDLIST.length);
  console.log("solution:", WORDLIST[random]);
  return WORDLIST[random];
};

export const getRandomWordFromDictionary = (dictionary: object): string => {
  const random = Math.floor(Math.random() * Object.keys(dictionary).length);
  console.log("solution:", Object.keys(dictionary)[random]);
  return Object.keys(dictionary)[random];
};

const WORDLIST = [
  "Kugel",
  "Xenon",
  "Knopf",
  "Sitte",
  // "Foyer",
  "Wrack",
  "Kakao",
  "Datei",
  "Roman",
  "Echse",
  "Ruebe",
  "Spion",
  "Kraut",
  "Eiche",
  "Wiege",
  "Macht",
  "Markt",
  "Komma",
  "Linux",
  "Hallo",
  "rasch",
  "Lippe",
  "Regel",
  "Sosse",
  "Suppe",
  "Wurst",
  "Fuchs",
  "Stand",
  "stolz",
  // "Oscar",
  // "rapid",
  "malen",
  "lachs",
  "Zunge",
  "Regal",
  "Jeans",
  "Rauch",
  "Cameo",
  "Tonne",
  "Filet",
  "Kanne",
  "Ziele",
  "Magie",
  "Geige",
  "Tango",
  "Skala",
  "Matte",
  "Messe",
  "Chili",
  "coden",
  "Pizza",
  // "Reset",
  "Abend",
  "vital",
  "Motor",
  "Eimer",
  "Start",
  "Nadel",
  "Stamm",
  // "Myrte",
  "Pirat",
  "Quote",
  "Tulpe",
  "Tutor",
  "Ochse",
  "Frist",
  "Tisch",
  "Wicht",
  "Eisen",
  "Theke",
  "Faser",
  "Basar",
  "Pappe",
  "Marke",
  "Sauna",
  "Boxer",
  "ehren",
  "Moral",
  "Klang",
  "Apfel",
  "Elite",
  "Falte",
  "Diele",
  "Asien",
  "glatt",
  "Areal",
  "Titan",
  "Zweck",
  "Luege",
  "Vespa",
  "Schuh",
  "Cheat",
  // "royal",
  "rufen",
  "Orkan",
  "Nagel",
  "crazy",
  "Seide",
  "baden",
  "Halle",
  "Wache",
  "Foehn",
  "Beruf",
  "Notiz",
  "Linie",
  "Genom",
  "Satan",
  "Email",
  "unten",
  "atmen",
  "Laerm",
  "Hafen",
  "Zecke",
  "zivil",
  "Jubel",
  "Platz",
  "Brand",
  "Event",
  "Baron",
  "Feder",
  "Folie",
  "Drama",
  "Votum",
  "Sauce",
  "Waren",
  "stumm",
  "blond",
  "Daten",
  "Laune",
  "Wille",
  "Wagon",
  "Suche",
  "Creme",
  "reich",
  "Narbe",
  "Adler",
  "Admin",
  "flach",
  "Codex",
  "Jacht",
  "Sohle",
  "Stein",
  "Backe",
  // "Milbe",
  "Kappe",
  // "Steig",
  "Sound",
  "klein",
  "Emoji",
  "Ikone",
  // "loben",
  "Flyer",
  "Guete",
  "Reife",
  "Sturm",
  "Abzug",
  "Kampf",
  "Bucht",
  // "Kader",
  "Bauer",
  "legal",
  "Kasse",
  "Waise",
  "Monat",
  "Couch",
  "Glanz",
  "Quere",
  "Henne",
  "Witwe",
  "Abgas",
  "Agrar",
  "Osten",
  "Kiste",
  "Zenit",
  "Muell",
  "Treue",
  // "Sales",
  "Biber",
  "Weste",
  "Plage",
  "Prinz",
  "Saldo",
  "Pille",
  "Durst",
  "Haube",
  "weben",
  "Chaos",
  "Menge",
  "Bogen",
  "polar",
  "aktiv",
  "Wende",
  // "Tobak",
  "viele",
  "Orden",
  "muede",
  "Musik",
  "Sorte",
  "Qualm",
  "ideal",
  "Essig",
  "Trost",
  "Dampf",
  "Armut",
  "Lanze",
  "vegan",
  // "Twist",
  "erben",
  "Weide",
  "Degen",
  "Chrom",
  "Muehe",
  "Krieg",
  "spaet",
  "Linse",
  "Serie",
  "Comic",
  "Ferne",
  "Jesus",
  "Raupe",
  "Radar",
  "Manga",
  "Kiosk",
  // "nativ",
  "Zwerg",
  "Bluff",
  "axial",
  "Seife",
  "Maler",
  "Zelle",
  "Frust",
  "Tamil",
  "Szene",
  // "Story",
  "Gelee",
  "Mensa",
  "Herde",
  "Blase",
  "Block",
  "Orgel",
  "Maske",
  "Mappe",
  "Bezug",
  "Braue",
  "Reihe",
  "Otter",
  // "Motel",
  "Bruch",
  "Magen",
  "Biene",
  "ueben",
  "Kamin",
  // "Tilde",
  "Regie",
  "Silbe",
  "Bitte",
  "Umzug",
  "Latex",
  "Grube",
  "Pfahl",
  "Hocke",
  "Taser",
  "Rinde",
  "Zweig",
  // "Queue",
  "Etage",
  // "intim",
  "Turbo",
  // "Rhein",
  "Seite",
  "Dinge",
  "Grund",
  "Adern",
  "Unfug",
  "Buche",
  "Ahorn",
  "Strom",
  "immun",
  "Sorge",
  "Traum",
  "Krebs",
  // "Front",
  "wenig",
  "Quark",
  "loyal",
  "Klick",
  "Curry",
  "suess",
  "Masse",
  "Dosis",
  "Folge",
  "Autor",
  "unten", //"Meter", // 15.12
  "Donau",
  "Alter",
  "Ultra",
  "Stock",
  "minus",
  "Mitte",
  "Kunst",
  "Virus",
  "Enzym",
  "Modul",
  "Radio",
  "Dolch",
  "Graph",
  // "Metro",
  "Prise",
  "Alibi",
  "These",
  "Papst",
  "Altar",
  "Dicke",
  "Grill",
  "Koala",
  "adieu",
  "eitel",
  "Sicht",
  "Hauch",
  // "queer",
  "Trank",
  // "Tatze",
  "Rudel",
  "Woche",
  "Abbau",
  "Lager",
  // "Aktor",
  "Anruf",
  "Locke",
  "weich",
  "Kanal",
  "Asche",
  "Duett",
  "Motiv",
  // "Lunch",
  "wuest",
  "Klima",
  "Alpen",
  "Brett",
  "Griff",
  "Joker",
  "Tarif",
  "Speck",
  "Wesen",
  "Stiel",
  "Gummi",
  "danke",
  // "Teddy",
  "Rente",
  // "Moped",
  "Brief",
  "Labor",
  "Pegel",
  "Salto",
  "Schaf",
  // "Remis",
  // "Kelle",
  "Trupp",
  "Feier",
  // "Alkin",
  "Tafel",
  "Vokal",
  "Piano",
  "Azubi",
  "Sakko",
  "Optik",
  // "Mekka",
  "Decke",
  "Pokal",
  "Thron",
  "Lunge",
  "Kamel",
  "Blitz",
  "Raute",
  "Wagen",
  "trist",

  "Tacho",
  "Fauna",
  "heben",
  "Pudel",
  "Organ",
  "artig",
  "Phase",
  "Ampel",
  "Watte",
  "Reise",
  "Uboot",
  "Boden",
  "Sucht",
  "Kunde",
  "Jacke",
  "Fahne",
  "Promi",
  "Katze",
  "Beben",
  "Paste",
  "Level",
  "Stopp",
  "Hirte",
  "Cache",
  "Gebet",
  "Abruf",
  "Taste",
  "Kreuz",
  "Panik",
  "Fisch",
  "Kluft",
  "Frost",
  "Rasur",
  "Panne",
  "garen",
  "Kleid",
  // "alpin",
  "Chemo",
  // "Power",
  "Fokus",
  "Rampe",
  "Kraft",
  "Enkel",
  "Punkt",
  "Tumor",
  "Sprit",
  "Konto",
  "Sport",
  // "Kebab",
  "Chips",
  "Queen",
  "Anker",
  // "luzid",
  // "Miliz",
  "Liege",
  "Faden",
  "Leine",
  "Vogel",
  "Seele",
  "Torso",
  "Ethik",
  "Hagel",
  "Audio",
  "Falke",
  "Ziege",
  "Klage",
  "Rinne",
  "Route",
  "Stahl",
  "Spatz",
  "Ernte",
  "Feuer",
  "Hobby",
  "Pacht",
  "Stadt",
  "Anzug",
  // "Truck",
  "Blech",
  "alles",
  "Summe",
  // "Ranch",
  "still",
  "uralt",
  "Drang",
  "offen",
  "Lampe",
  "Busch",
  "Felge",
  "Loewe",
  "Donut",
  "Nager",
  "Kette",
  "Angst",
  "Input",
  "Zwang",
  // "quasi",
  "losen",
  "Anbau",
  "Coach",
  "Wette",
  "Lasso",
  "Zeuge",
  "Gruft",
  "braun",
  "Meile",
  "Arena",
  // "Kante",
  // "Slash",
  "Licht",
  "Stich",
  "Chaot",
  "Motte",
  "eckig",
  "nasal",
  "Birke",
  "Toast",
  "platt",
  "Fluch",
  "Honig",
  "Warze",
  "Belag",
  "Effet",
  "Spule",
  "Waage",
  "Werte",
  "blass",
  "Fiale",
  "Pfote",
  "Paket",
  "Masse",
  "Preis",
  "Scheu",
  "Hilfe",
  "weise",
  "Teich",
  "Eifer",
  "Falle",
  "Thema",
  "Ninja",
  "sagen",
  "Achse",
  "dreck",
  "Stube",
  "Lauch",
  "circa",
  "vorne",
  "Boxen",
  // "Lyrik",
  "Taten",
  "Leere",
  "Wange",
  "Welle",
  "Gabel",
  "Kurve",
  "Tasse",
  "wehen",
  "Bauch",
  "Chlor",
  "Welpe",
  "Delle",
  "Denim",
  "Alpha",
  "Handy",
  "Braut",
  "Wolle",
  // "Match",
  "Wampe",
  "Beute",
  "Ferse",
  "Augen",
  "Staub",
  "Limit",
  "nobel",
  "Alias",
  "bauen",
  "Brise",
  "Drill",
  "Staat",
  "Bibel",
  "Erbse",
  "krank",
  "Laser",
  // "Pluto",
  "Leben",
  "Warte",
  "heute",
  "Alarm",
  "Mauer",
  "Kopie",
  "Leder",
  "Spass",
  "Sache",
  "Tritt",
  "ruhig",
  "Stoff",
  "Wolke",
  "Stift",
  "Titel",
  // "Alkor",
  "Aktie",
  "Forst",
  "voten",
  "sehen",
  "essen",
  "Array",
  "Yacht",
  "Wanne",
  "Datum",
  "Villa",
  "feige",
  "Genre",
  "Galle",
  "Puppe",
  "Zange",
  "Sonne",
  "reden",
  "Mathe",
  "extra",

  // "human",
  "dicht",
  "Niete",
  "Beere",
  "Salbe",
  "Milch",
  "Metal",
  "Dativ",
  "Pulli",
  "Pedal",
  "Saege",
  "Truhe",
  "Style",
  "Ebene",
  "mixen",
  "Komet",
  "Fluss",
  "Plane",
  "Tuete",
  "Tiefe",
  "Gebot",
  "total",
  "Stufe",
  "viral",
  "Hacke",
  "prima",
  "Lehre",
  "Fazit",
  "schal",
  "weiss",
  "Umweg",
  "Quarz",
  "Kabel",
  "Cover",
  "Beule",
  "Pfund",
  "Tiger",
  "Diaet",
  "Alien",
  "FLOSS",
  // "Helix",
  "Amsel",
  "Stier",
  "Torte",
  "Keule",
  // "kuehl",
  "Krimi",
  "Atlas",
  "Gnade",
  "Agent",
  "Eiter",
  "Bande",
  "Wachs",
  "Senat",
  "Logik",
  "Krone",
  "Probe",
  "Index",
  "Zitat",
  "Samen",
  "Ozean",
  "frech",
  "Liebe",
  "Sager",
  "stark",
  "Axiom",
  "Profi",
  "Trick",
  "Visum",
  "Nebel",
  "Sumpf",
  // "Tweet",
  "Trage",
  "sauer",
  // "Alken",
  "Kerze",
  "Cello",
  "Engel",
  "Salat",
  "Angel",
  "Maerz",
  // "Klaue",
  "Clown",
  "Juror",
  "super",
  // "Kasus",
  // "humid",
  "Pasta",
  // "uebel",
  "Spind",
  "Teint",
  "Opium",
  "Besen",
  "Fetus",
  // "Erpel",
  "Shirt",
  "Nonne",
  "Aroma",
  "Juwel",
  "Blatt",
  "Liter",
  "Gurke",
  "Album",
  "Zucht",
  // "Alkan",
  "Basis",
  // "laden",
  "Genie",
  "Rasen",
  "Kaese",
  "Finte",
  "Union",
  "Timer",
  "Nomen",
  "fremd",
  "teuer",
  "Enter",
  "Pause",
  "Onkel",
  "Fabel",
  // "Kreme",
  // "Affix",
  "Binde",
  "Hecht",
  // "Login",
  "Sturz",
  "Liste",
  "Tanne",
  "Larve",
  "Hosen",
  "Taler",
  "Tante",
  "Palme",
  "Botox",
  "Rasse",
  "Delta",
  "Umbau",
  "Robbe",
  "Junge",
  "Seher",
  "Imker",
  "Gasse",
  "Sekte",
  "Wespe",
  "Stall",
  "steil",
  "links",
  "Spiel",
  "Motto",
  "steif",
  // "Khaki",
  "lesen",
  "etwas",
  "Kater",
  "Pumpe",
  "Laube",
  "Nugat",
  // "Polen",
  "Bonus",
  "Fleck",
  "Recht",
  "spitz",
  "Kreis",
  "Dekan",
  "Crash",
  "Farbe",
  // "Label",
  // "Tower",
  "Feind",
  "Pixel",
  "Ruder",
  "Karte",
  "Pfand",
  "Speer",
  "blind",
  "Blick",
  "Rumpf",
  "leise",
  // "Snack",
  "Trend",
  "Ruine",
  "Spalt",
  "Tempo",
  "Mimik",
  // "smart",
  "Armee",
  "enorm",
  "Vater",
  "adlig",
  "Leber",
  "Humor",
  "Lokal",
  "Depot",
  "Flora",
  "Berge",
  "antik",
  "Suite",
  "Knete",
  "sanft",
  "Knall",
  "Jagen",
  "flink",
  // "Zeche",
  "Regen",
  "Perle",
  "Cargo",
  "Wiese",
  "Tadel",
  "trueb",
  "Luchs",
  "Pilot",
  "Party",
  "April",
  "Nacht",
  "exakt",
  "Birne",
  "Spott",
  "Hecke",
  "Druck",
  "knapp",
  "Walze",
  "Video",
  "Wippe",
  "Riese",
  "Sonar",
  "Waffe",
  "Pferd",
  // "frueh",
  "Geist",
  "posen",
  "Obhut",
  "Tabak",
  "Modus",
  "Blume",
  "eilig",
  "Wunde",
  "Notar",
  "Faust",
  "Wanze",
  "Model",
  // "Lobby",
  "Bohne",
  "Dachs",
  "Rache",
  "Disko",
  "Acker",
  "mutig",
  "dopen",
  "retro",
  // "Kodex",
  "Stern",
  "Mixer",
  "Natur",
  "beten",
  "Mafia",
  "Sahne",
  "Sirup",
  "zirka",
  "Firma",
  // "Panel",
  "Allee",
  "Kohle",
  "Bombe",
  "Puder",
  "Figur",
  // "Lunte",
  "Troll",
  "Leute",
  "Luxus",
  "Rolle",
  "Totem",
  // "alert",
  "Aphel",
  "Runde",
  "Dauer",
  "Segel",
  "Noten",
  // "saeen",
  "Zutat",
  "Haare",
  "Orbit",
  "Anime",
  "Weite",
  "Tiere",
  "Insel",
  "Hitze",
  "Venus",
  "Beleg",
  "Steak",
];
