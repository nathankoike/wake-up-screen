// all the timezones
const Timezones = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Algiers",
  "Africa/Bissau",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/El_Aaiun",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Khartoum",
  "Africa/Lagos",
  "Africa/Maputo",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Chicago",
  "America/Chihuahua",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Sitka",
  "America/St_Johns",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrvilleAntarctica/Mawson",
  "Antarctica/Macquarie",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kathmandu",
  "Asia/Khandyga",
  "Asia/Kolkata",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Riyadh",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Helsinki",
  "Europe/Istanbul",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Lisbon",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Wake",
  "Pacific/Wallis"
];

// the length of the wait time (seconds * millisecond_conversion)
const LoopTimer = 10 * 1000;

// this is the color of the canvas. it is a placeholder color and will be
// overwritten by the rest of the code
let Color = "#555555";

// create the menu div and add it to the canvas
let Menu = document.createElement("DIV");

// make the menu invisible
Menu.style.display = "none";

// add the menu to the canvas
document.body.appendChild(Menu);

// this is the target timezone ans can be overwritten by the user in the future
let Timezone = 'America/New_York';

// this is the target time and can be overwritten by the user in the future
let Target = "06:23";

// color the background color
function changeColor() {
  document.body.style.background = Color;
}

// get the color that the screen should be
function getColor(time){
  // get the time difference
  let hDiff = Number(Target.split(':')[0]) - Number(time.split(':')[0]);
  let mDiff = Number(Target.split(':')[1]) - Number(time.split(':')[1]);

  // force the differences to be positive
  hDiff < 0? hDiff = 24 + hDiff: hDiff = hDiff;
  mDiff < 1? mDiff = 60 + mDiff: mDiff = mDiff;

  // get the total difference in minutes
  let tDiff = 60 * hDiff + mDiff

  // check to see if tDiff is 8 hours or less
  if (tDiff <= 480){
    // if the total difference is larger than 255, just max red and move on
    let red = (480 - tDiff >= 255? 255: 480 - tDiff)
    let green = (480 - tDiff >= 255? 480 - 255 - tDiff: 0).toString(16);

    // make sure the hex strings are properly formatted
    red < 10? red = '0' + red.toString(16): red = red.toString(16)
    green < 10? green = '0' + green.toString(16): green = green.toString(16)

    return "#" + red + green + "00";
  }

  // keep the color the same if there are more than 8 hours until wake-up time
  return Color;
}

// check to see if we need to change the color of the screen, then change it if
// necessary
function setColor(){
  // get the current date and time information
  let present = new Date(Date.now());

  // get the current time as a string
  let currentTime = present.toLocaleString('en-GB',
                                            {timeZone:Timezone})
                                            .split(",")[1].slice(1, 6)

  // get the new color of the screen
  let newColor = getColor(currentTime)

  console.log(newColor);

  // check to see if the color needs to be changes
  if (Color != newColor){
    console.log("redrawing");

    // change the global color
    Color = newColor;

    changeColor(); // change the color to reflect the chnge in time
  }
}

// run the setColor function once every 30 seconds
function loop(){
  console.log("looping");
  setTimeout(
    ()=>{
      setColor();
      loop()},
    LoopTimer);
}

// show the settings menu
function showSettings(){
  Menu.style.display == "block"?
    Menu.style.display = "none":
    Menu.style.display = "block";
}

// initialize the hour selection in the menu
function hourInit(){
  // create a div to hold all the hours and add it to the menu
  let hours = document.createElement("DIV");
  hours.style.position = "relative";
  hours.style.float = "left";

  Menu.appendChild(hours);

  // create a header for the hour selection
  let hLabel = document.createElement("h2");
  hLabel.innerHTML = "Hour Selection";
  hours.appendChild(hLabel)

  // create and add all of the possible hours
  for (let i = 0; i < 24; i++) {
      let paragraph = document.createElement("h5");
      paragraph.innerHTML = i.toString();
      // click on a timezone to set it as your desired timezone
      paragraph.addEventListener(
        "mouseup",
        () => {
          Target = paragraph.innerHTML + ':' + Target.split(':')[1];
          console.log(Target);
        }
      );
      hours.appendChild(paragraph);
  }
}

// initialize the minute selection in the menu
function minInit(){
  // create a div to hold all the hours and add it to the menu
  let mins = document.createElement("DIV");
  mins.style.position = "relative";
  mins.style.float = "left";

  Menu.appendChild(mins);

  // create a header for the hour selection
  let mLabel = document.createElement("h2");
  mLabel.innerHTML = "Minute Selection";
  mins.appendChild(mLabel)

  // hold the lower 30 minutes
  let l30 = document.createElement("DIV");
  l30.style.position = "absolute";
  l30.style.float = "left";
  mins.appendChild(l30);

  // create and the lower 30 mins
  for (let i = 0; i < 30; i++) {
      let paragraph = document.createElement("h5");
      paragraph.innerHTML = i.toString();
      // click on a timezone to set it as your desired timezone
      paragraph.addEventListener(
        "mouseup",
        () => {
          Target = Target.split(':')[0] + ':' + paragraph.innerHTML;
          console.log(Target);
        }
      );

      l30.appendChild(paragraph);
  }

  // hold the lower 30 minutes
  let h30 = document.createElement("DIV");
  h30.style.position = "relative";
  h30.style.float = "right";
  mins.appendChild(h30);

  // create and the lower 30 mins
  for (let i = 30; i < 60; i++) {
      let paragraph = document.createElement("h5");
      paragraph.innerHTML = i.toString();
      // click on a timezone to set it as your desired timezone
      paragraph.addEventListener(
        "mouseup",
        () => {
          Target = Target.split(':')[0] + ':' + paragraph.innerHTML;
          console.log(Target);
        }
      );

      h30.appendChild(paragraph);
  }
}

// initialize the timezone selection in the menu
function zoneInit(){
  // create a div to hold all the hours and add it to the menu
  let zones = document.createElement("DIV");
  zones.style.position = "relative";
  zones.style.float = "right";

  Menu.appendChild(zones);

  // create a header for the hour selection
  let zLabel = document.createElement("h2");
  zLabel.innerHTML = "Timezone Selection";
  zones.appendChild(zLabel)

  // create and append all the hours to the menu
  for (let item in Timezones) {
      let paragraph = document.createElement("h5");
      paragraph.innerHTML = Timezones[item];
      // click on a timezone to set it as your desired timezone
      paragraph.addEventListener(
        "mouseup",
        () => {
          Timezone = paragraph.innerHTML;
          console.log(Timezone);
        }
      );
      zones.appendChild(paragraph);
  }
}

// initialize the menu
function menuInit(){
  hourInit();
  minInit();
  zoneInit();
}

// initialize the webapp
function init() {
  // add an event handler to change user settings
  document.addEventListener("mouseup", showSettings);
  menuInit();
}

init();
changeColor();
setColor();
loop();
