import React from "react";
import { range } from "lodash";

export const COLORS = ["#e61610", "#ff3823", "#72bec9", "#00bcd4"];

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
  "Group tightness": [
    "Close-knit",
    "Family",
    "Teamwork",
    "Low commitment",
    "Casual"
  ],
  Energy: [
    "Wild",
    "Fun",
    "Chill",
    "Laid back",
    "Dynamic",
    "Exciting",
    "Relaxing"
  ],
  Personality: [
    "Professional",
    "Intellectual",
    "Adventurous",
    "Party",
    "Intense",
    "Artsy",
    "Nerdy",
    "Safe space",
    "Compassionate"
  ]
};

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

export const VALID_YEARS = range(2017, 1970, -1);
