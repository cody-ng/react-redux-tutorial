import React, {
  createContext,
  useReducer,
  useContext,
  //useCallback,
} from "react";

import CoursesReducer from "../reducers/CoursesReducer";

const coursesContext = createContext();
const courseDispatchContext = createContext();

const initialState = {
  isLoading: false,
  courses: [],
  error: null,
};

const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  return (
    <coursesContext.Provider value={state}>
      <courseDispatchContext.Provider value={dispatch}>
        {children}
      </courseDispatchContext.Provider>
    </coursesContext.Provider>
  );
};

const useCoursesContext = () => {
  const context = useContext(coursesContext);
  if (context === undefined) {
    throw new Error(`useCoursesContext must be used within a CoursesProvider`);
  }
  return context;
};

const useCourseDispatchContext = () => {
  const context = useContext(courseDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useCourseDispatchContext must be used within a CoursesProvider`
    );
  }
  return context;
};

export {
  // context-related functions
  CoursesProvider,
  useCoursesContext,
  useCourseDispatchContext,
};
