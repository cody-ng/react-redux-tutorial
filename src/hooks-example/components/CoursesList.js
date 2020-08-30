import React from "react";
import { useCoursesContext } from "../hooks/CoursesContext";

const CoursesList = (props) => {
  const state = useCoursesContext();

  let list = state.courses.map((course) => (
    <div key={props.name + "-" + course.id}>{course.title}</div>
  ));
  console.log(props.name);
  console.log(state.courses);

  return (
    <>
      <b>
        <u>{props.name}</u>
      </b>
      {list}
    </>
  );
};

export default CoursesList;
