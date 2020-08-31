import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

import { useAddCourse } from "../hooks/CourseAPIs";
import {
  useCoursesContext,
  useCourseDispatchContext,
} from "../hooks/CoursesContext";

import { courses_error } from "../reducers/ActionCreators";

const AddCoursePage = () => {
  let initialState = {
    id: 0,
    title: "",
  };

  const coursesContext = useCoursesContext();
  const dispatch = useCourseDispatchContext();
  const [course, setCourse] = useState(initialState);
  const [courseId, setCourseId] = useState(0);
  const addCourse = useAddCourse();

  const handleChange = (event) => {
    const newCourse = { ...course, title: event.target.value };
    setCourse(newCourse);
  };

  const useHandleSubmit = (event) => {
    event.preventDefault();

    let newId = courseId + 1;
    setCourseId(newId);

    let newCourse = {
      id: newId,
      title: course.title,
    };
    console.log("AddCoursePage - submit");
    console.log(newCourse);

    addCourse(newCourse);
  };

  const onErrorConfirm = () => {
    dispatch(courses_error(null));
  };

  console.log("AddCoursePage - " + coursesContext.error);
  return (
    <>
      <form onSubmit={useHandleSubmit}>
        <h3>Add a Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />

        <input type="submit" value="Save" />
      </form>
      {coursesContext.error && (
        <SweetAlert
          warning
          //confirmBtnText="Yes, delete it!"
          // confirmBtnBsStyle="danger"
          // title={coursesContext.error}
          title="this is a test"
          onConfirm={onErrorConfirm}
          // showCancel
          // onCancel={this.onCancel}
          //focusCancelBtn
        ></SweetAlert>
      )}
    </>
  );
};

export default AddCoursePage;
