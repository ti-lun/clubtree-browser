/* @flow */
import _ from "lodash";
import {
  UPDATE_CLUB_NAME,
  UPDATE_CLUB_DESC,
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
  TOGGLE_VIBE_FILTER_CC
 } from "../actions/clubCreationActions";

type State = {
  newClub: {
    category: string,
    name: string,
    desc: string,
    establishedDate: string,
    meetingLocation: string,
    meetingDatesAndTimes: Object,
    fee: Object,
    memberReq: string,
    vibes: Array
  },
  validationSteps: Array,
  vibesFilterCC: Array
};

const INITIAL_STATE: State = {
  newClub: {
    category: "",
    name: "",
    desc: "",
    establishedDate: "",
    meetingLocation: "",
    meetingDatesAndTimes: {},
    fee: {},
    memberReq: "",
    vibes: []
  },
  validationSteps: [false, false, false, false, false, false],
  vibesFilterCC: []
};

export default (
  state: State = INITIAL_STATE,
  action: { type: string, category: string }
) => {
  let updatedDatesAndTimes = _.cloneDeep(state.newClub.meetingDatesAndTimes);
  console.log("updatedDates", updatedDatesAndTimes);
  switch (action.type) {
    case UPDATE_CLUB_NAME:
    console.log("receievd ", action.payload);
      return {
        ... state,
        newClub: {
          ... state.newClub,
          name: action.payload}
        };

    case UPDATE_CLUB_DESC:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          desc: action.payload}
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
          fee: {
            ... state.newClub.fee,
            amount: action.payload
          }
        }
      };

    case UPDATE_CLUB_FEE_PERIOD:
      return {
        ... state,
        newClub: {
          ... state.newClub,
          fee: {
            ... state.newClub.fee,
            period: action.payload
          }
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
      if (state.vibesFilterCC.length === 3) return state;
      if (_.includes(state.vibesFilterCC, action.payload)) {
        console.log("removing: " + action.payload);
        state = {
          ...state,
          vibesFilterCC: _.without(state.vibesFilterCC, action.payload)
        };
      } else {
        console.log("adding: " + action.payload);
        state = {
          ...state,
          vibesFilterCC: _.concat(state.vibesFilterCC, action.payload)
        };
      }
      return state;

    default:
      return state;
  }
};
