import { range } from "lodash";
import config from "config/application";

export const API_URL = config.proxies[0].destination;

export const COLORS = ["#e61610", "#ff3823", "#72bec9", "#00bcd4"];

export const CATEGORIES_COLORS = [
  "#fec63d",
  "#ffb253", 
  "#ff7043", 
  "#f66657",
  "#72bec9", 
  "#00bcd4", 
  "#2196f3",
  "#037aff",
  "#006ce5",
  "#0c59cf"
];

export const CATEGORIES_LABELS = {
  "Academics and Professional": {
    "greek life" : [
      "health/pre-health",
      "law/pre-law",
      "business",
      "engineering"
    ],
    "by concentration/major" : [
      "health/pre-health",
      "law/pre-law",
      "business",
      "engineering",
      "social sciences",
      "math/physics",
      "humanities and arts",
      "education/teaching",
      "computer science",
    ],
    "multicultural and heritage" : [],
    "leadership" : [],
    "competition-focused" : [],
    "project-focused" : [],
    "women's support" : [],
    "mentorship" : [],
    "military" : []
  },
  "Greek Life" : {
    "professional" : [
      "health/pre-health",
      "law/pre-law",
      "business",
      "engineering"
    ],
    "social" : [],
    "fraternity" : [],
    "sorority" : [],
    "co-ed fraternity" : [],
    "special features" : [
      "multicultural and heritage",
      "community service"
    ]
  },
  "Multicultural and Heritage" : [],
  "Community Service" : [
    "health/pre-health",
    "legal",
    "social justice",
    "civic involvement",
    "environmental/animal rights",
    "international",
    "education/teaching",
    "religious",
    "youth",
    "performing/creative arts"
  ],
  "Hobbies and Interests": [
    "video games",
    "classic games",
    "fandom",
    "craftsmanship",
    "idea-sharing",
    "nature appreciation"
  ],
  "Sports, Fitness and Well-being" : [
    "ball sports",
    "water sports",
    "aerobic sports",
    "martial arts",
    "men's sports",
    "women's sports",
    "mental health"
  ],
  "Performing and Creative Arts" : [
    "dance",
    "music",
    "writing/prose",
    "drama",
    "photography/cinematography",
    "fashion",
    "visual art"
  ],
  "Religious and Spiritual" : [],
  "Graduate Students" : [
    "law/pre-law",
    "engineering",
    "math/Physics",
    "multicultural and heritage"
  ],
  "Politics": [
    "political parties",
    "debate",
    "interest groups"
  ]
};

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
    "A lot, almost like a one-unit class",
    "Quite a bit, ~5 hrs/week",
    "Not very much, ~2 hrs/week",
    "Low commitment",
    "Attendance is optional"
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
