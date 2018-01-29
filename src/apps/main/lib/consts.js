import { range } from "lodash";
import config from "config/application";

export const API_URL = config.proxies[0].destination;

export const COLORS = ["#e61610", "#ff3823", "#72bec9", "#00bcd4"];

export const CLUB_NAME_CHAR_LENGTH = 30;

export const CLUB_DESC_WORD_LENGTH = 50;

export const CLUB_MEETING_LOC_CHAR_LENGTH = 30;

export const CATEGORIES_ICONS_MAP = {
  "Academic & Honors": "graduation-cap",
  "Career & Professional": "suitcase",
  Sports: "futbol-o",
  "Community Service": "handshake-o",
  Art: "paint-brush",
  Environmental: "tree",
  Social: "commenting",
  Gaming: "gamepad"
};

export const VIBES = {
  "Time commitment": [
    "Close-knit",
    "Family",
    "Teamwork",
    "Low commitment",
    "Casual"
  ],
  Energy: [
    "Super lit",
    "Fun",
    "Chill",
    "Laid back",
    "Focused",
    "Exciting",
    "Relaxing"
  ],
  Personality: [
    "Professional",
    "Intellectual",
    "Adventurous",
    "Party-loving",
    "Intense",
    "Artsy",
    "Nerdy",
    "Safe space",
    "Compassionate"
  ]
};

export const HOURS = range(24);

export const MINUTES = ["00", "15", "30", "45"];

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const MONTHS_TO_INT = {
  "January" : 1,
  "February" : 2,
  "March" : 3,
  "April" : 4,
  "May": 5,
  "June" : 6,
  "July" : 7,
  "August" : 8,
  "September" : 9,
  "October" : 10,
  "November" : 11,
  "December": 12
};

export const VALID_YEARS = range(2017, 1970, -1);
