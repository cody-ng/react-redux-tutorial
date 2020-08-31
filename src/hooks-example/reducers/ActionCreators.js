import {
  COURSES_IS_LOADING,
  COURSES_ADDED,
  COURSES_REMOVED,
  COURSES_SET_ERRORED,
} from "../reducers/ActionTypes";

// ---------------------------------------------------
// action creator functions
// ---------------------------------------------------
export const courses_loading = (payload) => ({
  type: COURSES_IS_LOADING,
  payload,
});

export const courses_added = (payload) => ({
  type: COURSES_ADDED,
  payload,
});

export const courses_removed = (payload) => ({
  type: COURSES_REMOVED,
  payload,
});

export const courses_error = (payload) => ({
  type: COURSES_SET_ERRORED,
  payload,
});
