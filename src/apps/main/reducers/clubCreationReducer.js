/* @flow */
import _ from "lodash";
import {
  LOAD_EXISTING_CLUB,
  UPDATE_CLUB_NAME,
  UPDATE_CLUB_DESC,
  UPDATE_CLUB_MONTH,
  UPDATE_CLUB_YEAR,
  UPDATE_CLUB_MEETING_LOC,
  UPDATE_START_HOUR,
  UPDATE_START_MINUTE,
  UPDATE_START_MERIDIAN,
  UPDATE_END_HOUR,
  UPDATE_END_MINUTE,
  UPDATE_END_MERIDIAN,
  UPDATE_CLUB_FEE_AMOUNT,
  UPDATE_CLUB_FEE_PERIOD,
  UPDATE_CLUB_MEM_REQS,
  TOGGLE_CLUB_CATEGORY,
  UPDATE_VALIDATION_STEP,
  INSERT_ACTIVE_TIMESLOT,
  REMOVE_ACTIVE_TIMESLOT,
  TOGGLE_VIBE_FILTER_CC,
  UPLOAD_CLUB_LOGO,
  UPLOAD_CLUB_COVER,
  UPDATE_QUESTION
 } from "../actions/clubCreationActions";
 import { MONTHS_TO_INT } from "../lib/consts";

type State = {
  newClub: {
    category: string,
    clubName: string,
    description: string,
    establishedDate: Date,
    meetingLocation: string,
    meetingDatesAndTimes: Object,
    fee: Object,
    memberReq: string,
    vibes: Array,
    id: string,
    questions: Object
  },
  validationSteps: Array,
  vibesFilterCC: Array
};

const INITIAL_STATE: State = {
  newClub: {
    category: "",
    clubName: "",
    description: "",
    establishedDate: new Date(0),
    meetingLocation: "",
    meetingDatesAndTimes: {},
    fee: {},
    memberReq: "",
    vibes: [],
    clubLogo: "",
    clubCover: "",
    id: "",
    clubFeeAmount: 0,
    clubFeePeriod: "meeting/session",
    questions: {}
  },
  validationSteps: [false, false, false, false, false, false],
  vibesFilterCC: []
};

export default (
  state: State = INITIAL_STATE,
  action: { type: string, category: string }
) => {
  let updatedDatesAndTimes = _.cloneDeep(state.newClub.meetingDatesAndTimes);
  switch (action.type) {

    case LOAD_EXISTING_CLUB:
      let existingClub = _.cloneDeep(state.newClub);
      for (let field in action.payload) {
        if (field === "_id") {
          existingClub["id"] = action.payload[field];
        }
        else {
          existingClub[field] = action.payload[field];
        }
      }

      return {
        ... state,
        newClub: existingClub
      };

    case UPDATE_CLUB_MONTH:
      let newMonth = new Date(state.newClub.establishedDate);
      newMonth.setUTCMonth(MONTHS_TO_INT[action.payload]);
      return {
        ...state,
        newClub: {
          ... state.newClub,
          establishedDate: newMonth
        }
      };


    case UPDATE_CLUB_YEAR:
      let newYear = new Date(state.newClub.establishedDate);
      newYear.setUTCFullYear(action.payload);
      return {
        ...state,
        newClub: {
          ... state.newClub,
          establishedDate: newYear
        }
      };

    case UPDATE_CLUB_NAME:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          clubName: action.payload}
        };

    case UPDATE_CLUB_DESC:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          description: action.payload}
        };

    case UPDATE_CLUB_MEETING_LOC:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingLocation: action.payload}
        };

    case UPDATE_CLUB_FEE_AMOUNT:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          clubFeeAmount: action.payload
        }
      };

    case UPDATE_CLUB_FEE_PERIOD:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          clubFeePeriod: action.payload
        }
      };

    case UPDATE_CLUB_MEM_REQS:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          memberReq: action.payload}
        };

    case UPDATE_START_HOUR: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          start: {
            hour: action.hour
          }
        };
      }
      else {
        let start = updated["start"];
        start = {
          ... start,
          hour: action.hour
        };

        updated["start"] = start;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }

    case UPDATE_START_MINUTE: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          start: {
            minute: action.minute
          }
        };
      }
      else {
        let start = updated["start"];
        start = {
          ... start,
          minute: action.minute
        };

        updated["start"] = start;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }

    case UPDATE_START_MERIDIAN: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          start: {
            meridian: action.meridian
          }
        };
      }
      else {
        let start = updated["start"];
        start = {
          ... start,
          meridian: action.meridian
        };

        updated["start"] = start;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }

    case UPDATE_END_HOUR: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          end: {
            hour: action.hour
          }
        };
      }
      else {
        let end = updated["end"];
        end = {
          ... end,
          hour: action.hour
        };

        updated["end"] = end;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }

    case UPDATE_END_MINUTE: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          end: {
            minute: action.minute
          }
        };
      }
      else {
        let end = updated["end"];
        end = {
          ... end,
          minute: action.minute
        };

        updated["end"] = end;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }


    case UPDATE_END_MERIDIAN: {
      let updated = updatedDatesAndTimes[action.day];
      if (updated === undefined) {
        updatedDatesAndTimes[action.day] = {
          end: {
            meridian: action.meridian
          }
        };
      }
      else {
        let end = updated["end"];
        end = {
          ... end,
          meridian: action.meridian
        };

        updated["end"] = end;
        updatedDatesAndTimes[action.day] = updated;
      }

      return {
        ... state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: updatedDatesAndTimes
        }
      };
    }

    case INSERT_ACTIVE_TIMESLOT: {
      const activeClubs = (state.newClub.meetingDatesAndTimes["meetingDays"])
        ? _.cloneDeep(state.newClub.meetingDatesAndTimes["meetingDays"])
        : [];

      activeClubs.push(action.payload)

      return { ...state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: {
            ... state.newClub.meetingDatesAndTimes,
            meetingDays: activeClubs
          }
        }
      };
    }


    case REMOVE_ACTIVE_TIMESLOT: {
      return { ...state,
        newClub: {
          ... state.newClub,
          meetingDatesAndTimes: {
            ... state.newClub.meetingDatesAndTimes,
            meetingDays: _.without(state.newClub.meetingDatesAndTimes["meetingDays"], action.payload)
          }
        }
      };
    }

    case TOGGLE_CLUB_CATEGORY:
      if (_.includes(state.newClub.category, action.payload)) {
        console.log("removing: " + action.payload);
        state = {
          ...state,
          newClub: {
            ...state.newClub,
            category: ""
          }
        };
      } else {
        console.log("adding: " + action.payload);
        state = {
          ...state,
          newClub: {
            ...state.newClub,
            category: action.payload
          }
        };
      }
      return state;
    case UPDATE_VALIDATION_STEP:
      let newValidationSteps = _.cloneDeep(state.validationSteps);
      newValidationSteps[action.payload] = !newValidationSteps[action.payload];
      return {
        ...state,
        validationSteps: newValidationSteps
      };

    case TOGGLE_VIBE_FILTER_CC:
      if (_.includes(state.vibesFilterCC, action.payload)) {
        console.log("removing: " + action.payload);
        state = {
          ...state,
          vibesFilterCC: _.without(state.vibesFilterCC, action.payload)
        };
      } else {
        if (state.vibesFilterCC.length === 3) return state;
        console.log("adding: " + action.payload);
        state = {
          ...state,
          vibesFilterCC: _.concat(state.vibesFilterCC, action.payload)
        };
      }
      return state;

    case UPLOAD_CLUB_LOGO:
      return {
        ...state,
        newClub: {
          ...state.newClub,
          clubLogo: action.payload.url
        }
      }

    case UPLOAD_CLUB_COVER:
      return {
        ...state,
        newClub: {
          ...state.newClub,
          clubCover: action.payload.url
        }
      };

    case UPDATE_QUESTION:
      return {
        ...state,
        newClub: {
          ...state.newClub,
          questions: action.payload
        }
      };


    default:
      return state;
  }
};
