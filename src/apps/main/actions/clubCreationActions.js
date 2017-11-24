export const LOAD_EXISTING_CLUB = "LOAD_EXISTING_CLUB";
export const TOGGLE_CLUB_CATEGORY = "TOGGLE_CLUB_CATEGORY";
export const UPDATE_VALIDATION_STEP = "UPDATE_VALIDATION_STEP";
export const UPDATE_CLUB_NAME = "UPDATE_CLUB_NAME";
export const UPDATE_CLUB_MONTH = "UPDATE_CLUB_MONTH";
export const UPDATE_CLUB_YEAR = "UPDATE_CLUB_YEAR";
export const UPDATE_CLUB_DESC = "UPDATE_CLUB_DESC";
export const UPDATE_CLUB_MEETING_LOC = "UPDATE_CLUB_MEETING_LOC";
export const UPDATE_START_HOUR = "UPDATE_START_HOUR";
export const UPDATE_START_MINUTE = "UPDATE_START_MINUTE";
export const UPDATE_START_MERIDIAN = "UPDATE_START_MERIDIAN";
export const UPDATE_END_HOUR = "UPDATE_END_HOUR";
export const UPDATE_END_MINUTE = "UPDATE_END_MINUTE";
export const UPDATE_END_MERIDIAN = "UPDATE_END_MERIDIAN";
export const UPDATE_CLUB_FEE_AMOUNT = "UPDATE_CLUB_FEE_AMOUNT";
export const UPDATE_CLUB_FEE_PERIOD = "UPDATE_CLUB_FEE_PERIOD";
export const UPDATE_CLUB_MEM_REQS = "UPDATE_CLUB_MEM_REQS";
export const INSERT_ACTIVE_TIMESLOT = "INSERT_ACTIVE_TIMESLOT";
export const REMOVE_ACTIVE_TIMESLOT = "REMOVE_ACTIVE_TIMESLOT";
export const TOGGLE_VIBE_FILTER_CC = "TOGGLE_VIBE_FILTER_CC";
export const UPLOAD_CLUB_LOGO = "UPLOAD_CLUB_LOGO";
export const UPLOAD_CLUB_COVER = "UPLOAD_CLUB_COVER";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const CLEAR_INFO = "CLEAR_INFO";

export function loadExistingClub(o) {
  return {
    type: LOAD_EXISTING_CLUB,
    payload: o
  };
}

export function clearInfo() {
  return {
    type: CLEAR_INFO
  };
}

export function updateClubName(e) {
  return {
    type: UPDATE_CLUB_NAME,
    payload: e.target.value
  };
}

export function updateClubMonth(e) {
  return {
    type: UPDATE_CLUB_MONTH,
    payload: e.target.value
  };
}

export function updateClubYear(e) {
  return {
    type: UPDATE_CLUB_YEAR,
    payload: e.target.value
  };
}

export function updateClubDesc(e) {
  return {
    type: UPDATE_CLUB_DESC,
    payload: e.target.value
  };
}

export function updateClubMeetingLocation(e) {
  return {
    type: UPDATE_CLUB_MEETING_LOC,
    payload: e.target.value
  };
}

export function updateClubFeeAmount(e) {
  return {
    type: UPDATE_CLUB_FEE_AMOUNT,
    payload: e.target.value
  };
}

export function updateClubFeePeriod(e) {
  return {
    type: UPDATE_CLUB_FEE_PERIOD,
    payload: e.target.value
  };
}

export function updateClubMemReqs(e) {
  return {
    type: UPDATE_CLUB_MEM_REQS,
    payload: e.target.value
  };
}

export function toggleClubCategory(category: string) {
  return {
    type: TOGGLE_CLUB_CATEGORY,
    payload: category
  };
}

export function updateStartHour(e, day) {
  return {
    type: UPDATE_START_HOUR,
    hour: e.target.value,
    day: day
  };
}

export function updateStartMinute(e, day) {
  return {
    type: UPDATE_START_MINUTE,
    minute: e.target.value,
    day: day
  };
}

export function updateStartMeridian(e, day) {
  return {
    type: UPDATE_START_MERIDIAN,
    meridian: e.target.value,
    day: day
  };
}

export function updateEndHour(e, day) {
  return {
    type: UPDATE_END_HOUR,
    hour: e.target.value,
    day: day
  };
}

export function updateEndMinute(e, day) {
  return {
    type: UPDATE_END_MINUTE,
    minute: e.target.value,
    day: day
  };
}

export function updateEndMeridian(e, day) {
  return {
    type: UPDATE_END_MERIDIAN,
    meridian: e.target.value,
    day: day
  };
}

export function insertActiveTimeslot(day) {
  return {
    type: INSERT_ACTIVE_TIMESLOT,
    payload: day
  };
}

export function removeActiveTimeslot(day) {
  return {
    type: REMOVE_ACTIVE_TIMESLOT,
    payload: day
  };
}

export function updateValidationStep(step: number) {
  return {
    type: UPDATE_VALIDATION_STEP,
    payload: step
  };
}

export function toggleVibeFilterCC(vibe: string) {
  return {
    type: TOGGLE_VIBE_FILTER_CC,
    payload: vibe
  };
}

export function uploadClubLogo(logoObj: Object) {
  return {
    type: UPLOAD_CLUB_LOGO,
    payload: logoObj
  };
}

export function uploadClubCover(coverObj: Object) {
  return {
    type: UPLOAD_CLUB_COVER,
    payload: coverObj
  };
}

export function updateQuestion(qObj: Object) {
  return {
    type: UPDATE_QUESTION,
    payload: qObj
  };
}
