import React from "react";
//import PropTypes from "prop-types";

// const propTypes = {
//   courses: PropTypes.array.isRequired,
// };

class HookCoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
    // this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {/* {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))} */}
      </form>
    );
  }
}

// HookCoursesPage.propTypes = propTypes;

export default HookCoursesPage;
