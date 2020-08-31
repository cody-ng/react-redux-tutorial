import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const addCourse = useAddCourse();

  const [course, setCourse] = useState(initialState);
  const [courseId, setCourseId] = useState(0);
  //const [inputError, setinputError] = useState(null);

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

    setCourse(initialState);
  };

  const onErrorConfirm = () => {
    dispatch(courses_error(null));
  };

  // console.log("AddCoursePage - " + coursesContext.error);

  if (coursesContext.isLoading) {
    return (
      <Alert variant="info">
        <FontAwesomeIcon icon={["fas", "spinner"]} pulse fixedWidth size="4x" />
        Adding course...
      </Alert>
    );
  }

  let isSubmitDisabled = course
    ? course.title
      ? course.title.length === 0
      : true
    : false;

  console.log("AddCoursePage - isSubmitDisabled=" + isSubmitDisabled);
  console.log(course.title ? "title=true" : "title=false");

  console.log(course);

  return (
    <>
      <form onSubmit={useHandleSubmit}>
        <h3>Add a Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />

        <input type="submit" value="Save" disabled={isSubmitDisabled} />
      </form>
      {/* {coursesContext.isLoading && <FontAwesomeIcon icon={["fab", "apple"]} />} */}
      {/* {if( coursesContext.isLoading )
      return(
        <Alert bsStyle="info">
          <FontAwesomeIcon
            icon={["fas", "spinner"]}
            pulse
            fixedWidth
            size="4x"
          />
          Adding course...
        </Alert>
      )} */}

      {coursesContext.error && (
        <SweetAlert
          warning
          //confirmBtnText="Yes, delete it!"
          // confirmBtnBsStyle="danger"
          title={coursesContext.error}
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
