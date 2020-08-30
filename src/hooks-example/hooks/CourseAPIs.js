import { useCallback } from "react";
import { useCourseDispatchContext } from "./CoursesContext";
import { courses_loading, courses_added } from "../reducers/ActionCreators";

// custom hook to work on courses

export const useAddCourse = () => {
  const dispatch = useCourseDispatchContext();

  const addCourseCB = useCallback(
    (course) => {
      dispatch(courses_loading(true));

      // simulate a server API call
      setTimeout(() => {
        dispatch(courses_added(course));
        dispatch(courses_loading(false));
      }, 1000);
    },
    [dispatch]
  );

  return addCourseCB;
};
