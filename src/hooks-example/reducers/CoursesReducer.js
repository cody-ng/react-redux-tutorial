import {
  COURSES_IS_LOADING,
  COURSES_ADDED,
  COURSES_REMOVED,
} from "./ActionTypes";

const defaultState = {
  isLoading: false,
  courses: [], // courses is a string array to keep things simple
  error: null,
};

const CoursesReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  let index;

  switch (type) {
    case COURSES_IS_LOADING:
      //console.log('COURSES_IS_LOADING');
      return {
        ...state,
        isLoading: payload,
      };

    case COURSES_ADDED:
      //console.log('COURSES_ADDED');
      index = state.courses.findIndex(
        (item) => payload.title.toLowerCase() === item.title.toLowerCase()
      );

      if (index < 0) {
        return {
          ...state,
          courses: [
            ...state.courses,
            {
              id: payload.id,
              title: payload.title,
            },
          ],

          isLoading: false,
          error: null,
        };
      }
      return state;

    case COURSES_REMOVED:
      //console.log('COURSES_REMOVED');
      index = state.courses.findIndex(
        (item) => payload.title.toLowerCase() === item.title.toLowerCase()
      );

      if (index > -1) {
        let newCourses = state.courses.filter(
          (x) => x.title.toLowerCase() !== payload.title.toLowerCase()
        );

        return {
          ...state,
          courses: newCourses,
          isLoading: false,
          error: null,
        };
      }
      return state;

    default:
      throw new Error(`mappedCoursesReducer unhandled action type: ${type}`);
    // return state
  }
};

export default CoursesReducer;
