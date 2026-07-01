// Country data — extracted from the original FlagsTrainer .NET data files (Data/*.cs).
const COUNTRIES = [
  {
    "name": "Denmark",
    "namePl": "Dania",
    "capital": "Copenhagen",
    "capitalPl": "Kopenhaga",
    "isoCode": "dk",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Estonia",
    "namePl": "Estonia",
    "capital": "Tallinn",
    "capitalPl": "Tallin",
    "isoCode": "ee",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Finland",
    "namePl": "Finlandia",
    "capital": "Helsinki",
    "capitalPl": "Helsinki",
    "isoCode": "fi",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Iceland",
    "namePl": "Islandia",
    "capital": "Reykjavik",
    "capitalPl": "Reykjavik",
    "isoCode": "is",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Ireland",
    "namePl": "Irlandia",
    "capital": "Dublin",
    "capitalPl": "Dublin",
    "isoCode": "ie",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Latvia",
    "namePl": "Łotwa",
    "capital": "Riga",
    "capitalPl": "Ryga",
    "isoCode": "lv",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Lithuania",
    "namePl": "Litwa",
    "capital": "Vilnius",
    "capitalPl": "Wilno",
    "isoCode": "lt",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Norway",
    "namePl": "Norwegia",
    "capital": "Oslo",
    "capitalPl": "Oslo",
    "isoCode": "no",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Sweden",
    "namePl": "Szwecja",
    "capital": "Stockholm",
    "capitalPl": "Sztokholm",
    "isoCode": "se",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "United Kingdom",
    "namePl": "Wielka Brytania",
    "capital": "London",
    "capitalPl": "Londyn",
    "isoCode": "gb",
    "region": "Northern Europe",
    "continent": "Europe"
  },
  {
    "name": "Austria",
    "namePl": "Austria",
    "capital": "Vienna",
    "capitalPl": "Wiedeń",
    "isoCode": "at",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Belgium",
    "namePl": "Belgia",
    "capital": "Brussels",
    "capitalPl": "Bruksela",
    "isoCode": "be",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "France",
    "namePl": "Francja",
    "capital": "Paris",
    "capitalPl": "Paryż",
    "isoCode": "fr",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Germany",
    "namePl": "Niemcy",
    "capital": "Berlin",
    "capitalPl": "Berlin",
    "isoCode": "de",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Liechtenstein",
    "namePl": "Liechtenstein",
    "capital": "Vaduz",
    "capitalPl": "Vaduz",
    "isoCode": "li",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Luxembourg",
    "namePl": "Luksemburg",
    "capital": "Luxembourg",
    "capitalPl": "Luksemburg",
    "isoCode": "lu",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Monaco",
    "namePl": "Monako",
    "capital": "Monaco",
    "capitalPl": "Monako",
    "isoCode": "mc",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Netherlands",
    "namePl": "Holandia",
    "capital": "Amsterdam",
    "capitalPl": "Amsterdam",
    "isoCode": "nl",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Portugal",
    "namePl": "Portugalia",
    "capital": "Lisbon",
    "capitalPl": "Lizbona",
    "isoCode": "pt",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Switzerland",
    "namePl": "Szwajcaria",
    "capital": "Bern",
    "capitalPl": "Berno",
    "isoCode": "ch",
    "region": "Western Europe",
    "continent": "Europe"
  },
  {
    "name": "Albania",
    "namePl": "Albania",
    "capital": "Tirana",
    "capitalPl": "Tirana",
    "isoCode": "al",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Andorra",
    "namePl": "Andora",
    "capital": "Andorra la Vella",
    "capitalPl": "Andora la Vella",
    "isoCode": "ad",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Bosnia and Herzegovina",
    "namePl": "Bośnia i Hercegowina",
    "capital": "Sarajevo",
    "capitalPl": "Sarajewo",
    "isoCode": "ba",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Croatia",
    "namePl": "Chorwacja",
    "capital": "Zagreb",
    "capitalPl": "Zagrzeb",
    "isoCode": "hr",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Cyprus",
    "namePl": "Cypr",
    "capital": "Nicosia",
    "capitalPl": "Nikozja",
    "isoCode": "cy",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Greece",
    "namePl": "Grecja",
    "capital": "Athens",
    "capitalPl": "Ateny",
    "isoCode": "gr",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Italy",
    "namePl": "Włochy",
    "capital": "Rome",
    "capitalPl": "Rzym",
    "isoCode": "it",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Kosovo",
    "namePl": "Kosowo",
    "capital": "Pristina",
    "capitalPl": "Prisztina",
    "isoCode": "xk",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Malta",
    "namePl": "Malta",
    "capital": "Valletta",
    "capitalPl": "Valletta",
    "isoCode": "mt",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Montenegro",
    "namePl": "Czarnogóra",
    "capital": "Podgorica",
    "capitalPl": "Podgorica",
    "isoCode": "me",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "North Macedonia",
    "namePl": "Macedonia Północna",
    "capital": "Skopje",
    "capitalPl": "Skopje",
    "isoCode": "mk",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "San Marino",
    "namePl": "San Marino",
    "capital": "San Marino",
    "capitalPl": "San Marino",
    "isoCode": "sm",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Serbia",
    "namePl": "Serbia",
    "capital": "Belgrade",
    "capitalPl": "Belgrad",
    "isoCode": "rs",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Slovenia",
    "namePl": "Słowenia",
    "capital": "Ljubljana",
    "capitalPl": "Lublana",
    "isoCode": "si",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Spain",
    "namePl": "Hiszpania",
    "capital": "Madrid",
    "capitalPl": "Madryt",
    "isoCode": "es",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Vatican City",
    "namePl": "Watykan",
    "capital": "Vatican City",
    "capitalPl": "Watykan",
    "isoCode": "va",
    "region": "Southern Europe",
    "continent": "Europe"
  },
  {
    "name": "Czechia",
    "namePl": "Czechy",
    "capital": "Prague",
    "capitalPl": "Praga",
    "isoCode": "cz",
    "region": "Central Europe",
    "continent": "Europe"
  },
  {
    "name": "Hungary",
    "namePl": "Węgry",
    "capital": "Budapest",
    "capitalPl": "Budapeszt",
    "isoCode": "hu",
    "region": "Central Europe",
    "continent": "Europe"
  },
  {
    "name": "Poland",
    "namePl": "Polska",
    "capital": "Warsaw",
    "capitalPl": "Warszawa",
    "isoCode": "pl",
    "region": "Central Europe",
    "continent": "Europe"
  },
  {
    "name": "Slovakia",
    "namePl": "Słowacja",
    "capital": "Bratislava",
    "capitalPl": "Bratysława",
    "isoCode": "sk",
    "region": "Central Europe",
    "continent": "Europe"
  },
  {
    "name": "Belarus",
    "namePl": "Białoruś",
    "capital": "Minsk",
    "capitalPl": "Mińsk",
    "isoCode": "by",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Bulgaria",
    "namePl": "Bułgaria",
    "capital": "Sofia",
    "capitalPl": "Sofia",
    "isoCode": "bg",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Moldova",
    "namePl": "Mołdawia",
    "capital": "Chișinău",
    "capitalPl": "Kiszyniów",
    "isoCode": "md",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Romania",
    "namePl": "Rumunia",
    "capital": "Bucharest",
    "capitalPl": "Bukareszt",
    "isoCode": "ro",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Russia",
    "namePl": "Rosja",
    "capital": "Moscow",
    "capitalPl": "Moskwa",
    "isoCode": "ru",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Ukraine",
    "namePl": "Ukraina",
    "capital": "Kyiv",
    "capitalPl": "Kijów",
    "isoCode": "ua",
    "region": "Eastern Europe",
    "continent": "Europe"
  },
  {
    "name": "Algeria",
    "namePl": "Algieria",
    "capital": "Algiers",
    "capitalPl": "Algier",
    "isoCode": "dz",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Angola",
    "namePl": "Angola",
    "capital": "Luanda",
    "capitalPl": "Luanda",
    "isoCode": "ao",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Benin",
    "namePl": "Benin",
    "capital": "Porto-Novo",
    "capitalPl": "Porto-Novo",
    "isoCode": "bj",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Botswana",
    "namePl": "Botswana",
    "capital": "Gaborone",
    "capitalPl": "Gaborone",
    "isoCode": "bw",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Burkina Faso",
    "namePl": "Burkina Faso",
    "capital": "Ouagadougou",
    "capitalPl": "Wagadugu",
    "isoCode": "bf",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Burundi",
    "namePl": "Burundi",
    "capital": "Gitega",
    "capitalPl": "Gitega",
    "isoCode": "bi",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Cameroon",
    "namePl": "Kamerun",
    "capital": "Yaoundé",
    "capitalPl": "Jaunde",
    "isoCode": "cm",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Cape Verde",
    "namePl": "Wyspy Zielonego Przylądka",
    "capital": "Praia",
    "capitalPl": "Praia",
    "isoCode": "cv",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Central African Republic",
    "namePl": "Republika Środkowoafrykańska",
    "capital": "Bangui",
    "capitalPl": "Bangui",
    "isoCode": "cf",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Chad",
    "namePl": "Czad",
    "capital": "N'Djamena",
    "capitalPl": "Ndżamena",
    "isoCode": "td",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Comoros",
    "namePl": "Komory",
    "capital": "Moroni",
    "capitalPl": "Moroni",
    "isoCode": "km",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "DR Congo",
    "namePl": "Demokratyczna Republika Konga",
    "capital": "Kinshasa",
    "capitalPl": "Kinszasa",
    "isoCode": "cd",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Republic of the Congo",
    "namePl": "Republika Konga",
    "capital": "Brazzaville",
    "capitalPl": "Brazzaville",
    "isoCode": "cg",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Côte d'Ivoire",
    "namePl": "Wybrzeże Kości Słoniowej",
    "capital": "Yamoussoukro",
    "capitalPl": "Jamusukro",
    "isoCode": "ci",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Djibouti",
    "namePl": "Dżibuti",
    "capital": "Djibouti",
    "capitalPl": "Dżibuti",
    "isoCode": "dj",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Egypt",
    "namePl": "Egipt",
    "capital": "Cairo",
    "capitalPl": "Kair",
    "isoCode": "eg",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Equatorial Guinea",
    "namePl": "Gwinea Równikowa",
    "capital": "Malabo",
    "capitalPl": "Malabo",
    "isoCode": "gq",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Eritrea",
    "namePl": "Erytrea",
    "capital": "Asmara",
    "capitalPl": "Asmara",
    "isoCode": "er",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Eswatini",
    "namePl": "Eswatini",
    "capital": "Mbabane",
    "capitalPl": "Mbabane",
    "isoCode": "sz",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Ethiopia",
    "namePl": "Etiopia",
    "capital": "Addis Ababa",
    "capitalPl": "Addis Abeba",
    "isoCode": "et",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Gabon",
    "namePl": "Gabon",
    "capital": "Libreville",
    "capitalPl": "Libreville",
    "isoCode": "ga",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Gambia",
    "namePl": "Gambia",
    "capital": "Banjul",
    "capitalPl": "Bandżul",
    "isoCode": "gm",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Ghana",
    "namePl": "Ghana",
    "capital": "Accra",
    "capitalPl": "Akra",
    "isoCode": "gh",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Guinea",
    "namePl": "Gwinea",
    "capital": "Conakry",
    "capitalPl": "Konakry",
    "isoCode": "gn",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Guinea-Bissau",
    "namePl": "Gwinea Bissau",
    "capital": "Bissau",
    "capitalPl": "Bissau",
    "isoCode": "gw",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Kenya",
    "namePl": "Kenia",
    "capital": "Nairobi",
    "capitalPl": "Nairobi",
    "isoCode": "ke",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Lesotho",
    "namePl": "Lesotho",
    "capital": "Maseru",
    "capitalPl": "Maseru",
    "isoCode": "ls",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Liberia",
    "namePl": "Liberia",
    "capital": "Monrovia",
    "capitalPl": "Monrovia",
    "isoCode": "lr",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Libya",
    "namePl": "Libia",
    "capital": "Tripoli",
    "capitalPl": "Trypolis",
    "isoCode": "ly",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Madagascar",
    "namePl": "Madagaskar",
    "capital": "Antananarivo",
    "capitalPl": "Antananarywa",
    "isoCode": "mg",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Malawi",
    "namePl": "Malawi",
    "capital": "Lilongwe",
    "capitalPl": "Lilongwe",
    "isoCode": "mw",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Mali",
    "namePl": "Mali",
    "capital": "Bamako",
    "capitalPl": "Bamako",
    "isoCode": "ml",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Mauritania",
    "namePl": "Mauretania",
    "capital": "Nouakchott",
    "capitalPl": "Nawakszut",
    "isoCode": "mr",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Mauritius",
    "namePl": "Mauritius",
    "capital": "Port Louis",
    "capitalPl": "Port Louis",
    "isoCode": "mu",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Morocco",
    "namePl": "Maroko",
    "capital": "Rabat",
    "capitalPl": "Rabat",
    "isoCode": "ma",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Mozambique",
    "namePl": "Mozambik",
    "capital": "Maputo",
    "capitalPl": "Maputo",
    "isoCode": "mz",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Namibia",
    "namePl": "Namibia",
    "capital": "Windhoek",
    "capitalPl": "Windhoek",
    "isoCode": "na",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Niger",
    "namePl": "Niger",
    "capital": "Niamey",
    "capitalPl": "Niamej",
    "isoCode": "ne",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Nigeria",
    "namePl": "Nigeria",
    "capital": "Abuja",
    "capitalPl": "Abudża",
    "isoCode": "ng",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Rwanda",
    "namePl": "Rwanda",
    "capital": "Kigali",
    "capitalPl": "Kigali",
    "isoCode": "rw",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "São Tomé and Príncipe",
    "namePl": "Wyspy Świętego Tomasza i Książęca",
    "capital": "São Tomé",
    "capitalPl": "São Tomé",
    "isoCode": "st",
    "region": "Central Africa",
    "continent": "Africa"
  },
  {
    "name": "Senegal",
    "namePl": "Senegal",
    "capital": "Dakar",
    "capitalPl": "Dakar",
    "isoCode": "sn",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Seychelles",
    "namePl": "Seszele",
    "capital": "Victoria",
    "capitalPl": "Victoria",
    "isoCode": "sc",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Sierra Leone",
    "namePl": "Sierra Leone",
    "capital": "Freetown",
    "capitalPl": "Freetown",
    "isoCode": "sl",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Somalia",
    "namePl": "Somalia",
    "capital": "Mogadishu",
    "capitalPl": "Mogadiszu",
    "isoCode": "so",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "South Africa",
    "namePl": "Republika Południowej Afryki",
    "capital": "Pretoria",
    "capitalPl": "Pretoria",
    "isoCode": "za",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "South Sudan",
    "namePl": "Sudan Południowy",
    "capital": "Juba",
    "capitalPl": "Dżuba",
    "isoCode": "ss",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Sudan",
    "namePl": "Sudan",
    "capital": "Khartoum",
    "capitalPl": "Chartum",
    "isoCode": "sd",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Tanzania",
    "namePl": "Tanzania",
    "capital": "Dodoma",
    "capitalPl": "Dodoma",
    "isoCode": "tz",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Togo",
    "namePl": "Togo",
    "capital": "Lomé",
    "capitalPl": "Lome",
    "isoCode": "tg",
    "region": "West Africa",
    "continent": "Africa"
  },
  {
    "name": "Tunisia",
    "namePl": "Tunezja",
    "capital": "Tunis",
    "capitalPl": "Tunis",
    "isoCode": "tn",
    "region": "North Africa",
    "continent": "Africa"
  },
  {
    "name": "Uganda",
    "namePl": "Uganda",
    "capital": "Kampala",
    "capitalPl": "Kampala",
    "isoCode": "ug",
    "region": "East Africa",
    "continent": "Africa"
  },
  {
    "name": "Zambia",
    "namePl": "Zambia",
    "capital": "Lusaka",
    "capitalPl": "Lusaka",
    "isoCode": "zm",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Zimbabwe",
    "namePl": "Zimbabwe",
    "capital": "Harare",
    "capitalPl": "Harare",
    "isoCode": "zw",
    "region": "Southern Africa",
    "continent": "Africa"
  },
  {
    "name": "Afghanistan",
    "namePl": "Afganistan",
    "capital": "Kabul",
    "capitalPl": "Kabul",
    "isoCode": "af",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "Armenia",
    "namePl": "Armenia",
    "capital": "Yerevan",
    "capitalPl": "Erywań",
    "isoCode": "am",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Azerbaijan",
    "namePl": "Azerbejdżan",
    "capital": "Baku",
    "capitalPl": "Baku",
    "isoCode": "az",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Bahrain",
    "namePl": "Bahrajn",
    "capital": "Manama",
    "capitalPl": "Manama",
    "isoCode": "bh",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Bangladesh",
    "namePl": "Bangladesz",
    "capital": "Dhaka",
    "capitalPl": "Dhaka",
    "isoCode": "bd",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Bhutan",
    "namePl": "Bhutan",
    "capital": "Thimphu",
    "capitalPl": "Thimphu",
    "isoCode": "bt",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Brunei",
    "namePl": "Brunei",
    "capital": "Bandar Seri Begawan",
    "capitalPl": "Bandar Seri Begawan",
    "isoCode": "bn",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Cambodia",
    "namePl": "Kambodża",
    "capital": "Phnom Penh",
    "capitalPl": "Phnom Penh",
    "isoCode": "kh",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "China",
    "namePl": "Chiny",
    "capital": "Beijing",
    "capitalPl": "Pekin",
    "isoCode": "cn",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Georgia",
    "namePl": "Gruzja",
    "capital": "Tbilisi",
    "capitalPl": "Tbilisi",
    "isoCode": "ge",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "India",
    "namePl": "Indie",
    "capital": "New Delhi",
    "capitalPl": "Nowe Delhi",
    "isoCode": "in",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Indonesia",
    "namePl": "Indonezja",
    "capital": "Jakarta",
    "capitalPl": "Dżakarta",
    "isoCode": "id",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Iran",
    "namePl": "Iran",
    "capital": "Tehran",
    "capitalPl": "Teheran",
    "isoCode": "ir",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Iraq",
    "namePl": "Irak",
    "capital": "Baghdad",
    "capitalPl": "Bagdad",
    "isoCode": "iq",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Israel",
    "namePl": "Izrael",
    "capital": "Jerusalem",
    "capitalPl": "Jerozolima",
    "isoCode": "il",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Japan",
    "namePl": "Japonia",
    "capital": "Tokyo",
    "capitalPl": "Tokio",
    "isoCode": "jp",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Jordan",
    "namePl": "Jordania",
    "capital": "Amman",
    "capitalPl": "Amman",
    "isoCode": "jo",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Kazakhstan",
    "namePl": "Kazachstan",
    "capital": "Astana",
    "capitalPl": "Astana",
    "isoCode": "kz",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "Kuwait",
    "namePl": "Kuwejt",
    "capital": "Kuwait City",
    "capitalPl": "Kuwait City",
    "isoCode": "kw",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Kyrgyzstan",
    "namePl": "Kirgistan",
    "capital": "Bishkek",
    "capitalPl": "Biszkek",
    "isoCode": "kg",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "Laos",
    "namePl": "Laos",
    "capital": "Vientiane",
    "capitalPl": "Wientian",
    "isoCode": "la",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Lebanon",
    "namePl": "Liban",
    "capital": "Beirut",
    "capitalPl": "Bejrut",
    "isoCode": "lb",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Malaysia",
    "namePl": "Malezja",
    "capital": "Kuala Lumpur",
    "capitalPl": "Kuala Lumpur",
    "isoCode": "my",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Maldives",
    "namePl": "Malediwy",
    "capital": "Malé",
    "capitalPl": "Male",
    "isoCode": "mv",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Mongolia",
    "namePl": "Mongolia",
    "capital": "Ulaanbaatar",
    "capitalPl": "Ułan Bator",
    "isoCode": "mn",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Myanmar",
    "namePl": "Mjanma",
    "capital": "Naypyidaw",
    "capitalPl": "Naypyidaw",
    "isoCode": "mm",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Nepal",
    "namePl": "Nepal",
    "capital": "Kathmandu",
    "capitalPl": "Katmandu",
    "isoCode": "np",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "North Korea",
    "namePl": "Korea Północna",
    "capital": "Pyongyang",
    "capitalPl": "Pjongjang",
    "isoCode": "kp",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Oman",
    "namePl": "Oman",
    "capital": "Muscat",
    "capitalPl": "Maskat",
    "isoCode": "om",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Pakistan",
    "namePl": "Pakistan",
    "capital": "Islamabad",
    "capitalPl": "Islamabad",
    "isoCode": "pk",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Philippines",
    "namePl": "Filipiny",
    "capital": "Manila",
    "capitalPl": "Manila",
    "isoCode": "ph",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Qatar",
    "namePl": "Katar",
    "capital": "Doha",
    "capitalPl": "Doha",
    "isoCode": "qa",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Saudi Arabia",
    "namePl": "Arabia Saudyjska",
    "capital": "Riyadh",
    "capitalPl": "Rijad",
    "isoCode": "sa",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Singapore",
    "namePl": "Singapur",
    "capital": "Singapore",
    "capitalPl": "Singapur",
    "isoCode": "sg",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "South Korea",
    "namePl": "Korea Południowa",
    "capital": "Seoul",
    "capitalPl": "Seul",
    "isoCode": "kr",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Sri Lanka",
    "namePl": "Sri Lanka",
    "capital": "Sri Jayawardenepura Kotte",
    "capitalPl": "Kotte",
    "isoCode": "lk",
    "region": "South Asia",
    "continent": "Asia"
  },
  {
    "name": "Syria",
    "namePl": "Syria",
    "capital": "Damascus",
    "capitalPl": "Damaszek",
    "isoCode": "sy",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Taiwan",
    "namePl": "Tajwan",
    "capital": "Taipei",
    "capitalPl": "Tajpej",
    "isoCode": "tw",
    "region": "East Asia",
    "continent": "Asia"
  },
  {
    "name": "Tajikistan",
    "namePl": "Tadżykistan",
    "capital": "Dushanbe",
    "capitalPl": "Duszanbe",
    "isoCode": "tj",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "Thailand",
    "namePl": "Tajlandia",
    "capital": "Bangkok",
    "capitalPl": "Bangkok",
    "isoCode": "th",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Timor-Leste",
    "namePl": "Timor Wschodni",
    "capital": "Dili",
    "capitalPl": "Dili",
    "isoCode": "tl",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Turkey",
    "namePl": "Turcja",
    "capital": "Ankara",
    "capitalPl": "Ankara",
    "isoCode": "tr",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Turkmenistan",
    "namePl": "Turkmenistan",
    "capital": "Ashgabat",
    "capitalPl": "Aszchabad",
    "isoCode": "tm",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "UAE",
    "namePl": "Zjednoczone Emiraty Arabskie",
    "capital": "Abu Dhabi",
    "capitalPl": "Abu Zabi",
    "isoCode": "ae",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Uzbekistan",
    "namePl": "Uzbekistan",
    "capital": "Tashkent",
    "capitalPl": "Taszkent",
    "isoCode": "uz",
    "region": "Central Asia",
    "continent": "Asia"
  },
  {
    "name": "Vietnam",
    "namePl": "Wietnam",
    "capital": "Hanoi",
    "capitalPl": "Hanoi",
    "isoCode": "vn",
    "region": "Southeast Asia",
    "continent": "Asia"
  },
  {
    "name": "Yemen",
    "namePl": "Jemen",
    "capital": "Sana'a",
    "capitalPl": "Sana",
    "isoCode": "ye",
    "region": "Western Asia",
    "continent": "Asia"
  },
  {
    "name": "Antigua and Barbuda",
    "namePl": "Antigua i Barbuda",
    "capital": "St. John's",
    "capitalPl": "Saint John's",
    "isoCode": "ag",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Bahamas",
    "namePl": "Bahamy",
    "capital": "Nassau",
    "capitalPl": "Nassau",
    "isoCode": "bs",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Barbados",
    "namePl": "Barbados",
    "capital": "Bridgetown",
    "capitalPl": "Bridgetown",
    "isoCode": "bb",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Belize",
    "namePl": "Belize",
    "capital": "Belmopan",
    "capitalPl": "Belmopan",
    "isoCode": "bz",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Canada",
    "namePl": "Kanada",
    "capital": "Ottawa",
    "capitalPl": "Ottawa",
    "isoCode": "ca",
    "region": "North America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Costa Rica",
    "namePl": "Kostaryka",
    "capital": "San José",
    "capitalPl": "San José",
    "isoCode": "cr",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Cuba",
    "namePl": "Kuba",
    "capital": "Havana",
    "capitalPl": "Hawana",
    "isoCode": "cu",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Dominica",
    "namePl": "Dominika",
    "capital": "Roseau",
    "capitalPl": "Roseau",
    "isoCode": "dm",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Dominican Republic",
    "namePl": "Dominikana",
    "capital": "Santo Domingo",
    "capitalPl": "Santo Domingo",
    "isoCode": "do",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "El Salvador",
    "namePl": "Salwador",
    "capital": "San Salvador",
    "capitalPl": "San Salvador",
    "isoCode": "sv",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Grenada",
    "namePl": "Grenada",
    "capital": "St. George's",
    "capitalPl": "Saint George's",
    "isoCode": "gd",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Guatemala",
    "namePl": "Gwatemala",
    "capital": "Guatemala City",
    "capitalPl": "Gwatemala",
    "isoCode": "gt",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Haiti",
    "namePl": "Haiti",
    "capital": "Port-au-Prince",
    "capitalPl": "Port-au-Prince",
    "isoCode": "ht",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Honduras",
    "namePl": "Honduras",
    "capital": "Tegucigalpa",
    "capitalPl": "Tegucigalpa",
    "isoCode": "hn",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Jamaica",
    "namePl": "Jamajka",
    "capital": "Kingston",
    "capitalPl": "Kingston",
    "isoCode": "jm",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Mexico",
    "namePl": "Meksyk",
    "capital": "Mexico City",
    "capitalPl": "Meksyk",
    "isoCode": "mx",
    "region": "North America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Nicaragua",
    "namePl": "Nikaragua",
    "capital": "Managua",
    "capitalPl": "Managua",
    "isoCode": "ni",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Panama",
    "namePl": "Panama",
    "capital": "Panama City",
    "capitalPl": "Panama",
    "isoCode": "pa",
    "region": "Central America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Saint Kitts and Nevis",
    "namePl": "Saint Kitts i Nevis",
    "capital": "Basseterre",
    "capitalPl": "Basseterre",
    "isoCode": "kn",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Saint Lucia",
    "namePl": "Saint Lucia",
    "capital": "Castries",
    "capitalPl": "Castries",
    "isoCode": "lc",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "namePl": "Saint Vincent i Grenadyny",
    "capital": "Kingstown",
    "capitalPl": "Kingstown",
    "isoCode": "vc",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "Trinidad and Tobago",
    "namePl": "Trynidad i Tobago",
    "capital": "Port of Spain",
    "capitalPl": "Port of Spain",
    "isoCode": "tt",
    "region": "Caribbean",
    "continent": "NorthAmerica"
  },
  {
    "name": "United States",
    "namePl": "Stany Zjednoczone",
    "capital": "Washington D.C.",
    "capitalPl": "Waszyngton",
    "isoCode": "us",
    "region": "North America",
    "continent": "NorthAmerica"
  },
  {
    "name": "Argentina",
    "namePl": "Argentyna",
    "capital": "Buenos Aires",
    "capitalPl": "Buenos Aires",
    "isoCode": "ar",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Bolivia",
    "namePl": "Boliwia",
    "capital": "Sucre",
    "capitalPl": "Sucre",
    "isoCode": "bo",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Brazil",
    "namePl": "Brazylia",
    "capital": "Brasília",
    "capitalPl": "Brasília",
    "isoCode": "br",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Chile",
    "namePl": "Chile",
    "capital": "Santiago",
    "capitalPl": "Santiago",
    "isoCode": "cl",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Colombia",
    "namePl": "Kolumbia",
    "capital": "Bogotá",
    "capitalPl": "Bogota",
    "isoCode": "co",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Ecuador",
    "namePl": "Ekwador",
    "capital": "Quito",
    "capitalPl": "Quito",
    "isoCode": "ec",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Guyana",
    "namePl": "Gujana",
    "capital": "Georgetown",
    "capitalPl": "Georgetown",
    "isoCode": "gy",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Paraguay",
    "namePl": "Paragwaj",
    "capital": "Asunción",
    "capitalPl": "Asunción",
    "isoCode": "py",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Peru",
    "namePl": "Peru",
    "capital": "Lima",
    "capitalPl": "Lima",
    "isoCode": "pe",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Suriname",
    "namePl": "Surinam",
    "capital": "Paramaribo",
    "capitalPl": "Paramaribo",
    "isoCode": "sr",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Uruguay",
    "namePl": "Urugwaj",
    "capital": "Montevideo",
    "capitalPl": "Montevideo",
    "isoCode": "uy",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Venezuela",
    "namePl": "Wenezuela",
    "capital": "Caracas",
    "capitalPl": "Caracas",
    "isoCode": "ve",
    "region": "South America",
    "continent": "SouthAmerica"
  },
  {
    "name": "Australia",
    "namePl": "Australia",
    "capital": "Canberra",
    "capitalPl": "Canberra",
    "isoCode": "au",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Fiji",
    "namePl": "Fidżi",
    "capital": "Suva",
    "capitalPl": "Suwa",
    "isoCode": "fj",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Kiribati",
    "namePl": "Kiribati",
    "capital": "South Tarawa",
    "capitalPl": "Tarawa",
    "isoCode": "ki",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Marshall Islands",
    "namePl": "Wyspy Marshalla",
    "capital": "Majuro",
    "capitalPl": "Majuro",
    "isoCode": "mh",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Micronesia",
    "namePl": "Mikronezja",
    "capital": "Palikir",
    "capitalPl": "Palikir",
    "isoCode": "fm",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Nauru",
    "namePl": "Nauru",
    "capital": "Yaren",
    "capitalPl": "Yaren",
    "isoCode": "nr",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "New Zealand",
    "namePl": "Nowa Zelandia",
    "capital": "Wellington",
    "capitalPl": "Wellington",
    "isoCode": "nz",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Palau",
    "namePl": "Palau",
    "capital": "Ngerulmud",
    "capitalPl": "Ngerulmud",
    "isoCode": "pw",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Papua New Guinea",
    "namePl": "Papua Nowa Gwinea",
    "capital": "Port Moresby",
    "capitalPl": "Port Moresby",
    "isoCode": "pg",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Samoa",
    "namePl": "Samoa",
    "capital": "Apia",
    "capitalPl": "Apia",
    "isoCode": "ws",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Solomon Islands",
    "namePl": "Wyspy Salomona",
    "capital": "Honiara",
    "capitalPl": "Honiara",
    "isoCode": "sb",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Tonga",
    "namePl": "Tonga",
    "capital": "Nukuʻalofa",
    "capitalPl": "Nukualofa",
    "isoCode": "to",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Tuvalu",
    "namePl": "Tuvalu",
    "capital": "Funafuti",
    "capitalPl": "Funafuti",
    "isoCode": "tv",
    "region": "Oceania",
    "continent": "Oceania"
  },
  {
    "name": "Vanuatu",
    "namePl": "Vanuatu",
    "capital": "Port Vila",
    "capitalPl": "Port Vila",
    "isoCode": "vu",
    "region": "Oceania",
    "continent": "Oceania"
  }
];
