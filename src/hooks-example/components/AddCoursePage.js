import React, { useState } from "react";
import { useAddCourse } from "../hooks/CourseAPIs";

const AddCoursePage = () => {
  let initialState = {
    id: 0,
    title: "",
  };

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

  //console.log("AddCoursePage");
  return (
    <form onSubmit={useHandleSubmit}>
      <h3>Add a Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />

      <input type="submit" value="Save" />
    </form>
  );
};

export default AddCoursePage;
