import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddCoursePage from "./AddCoursePage";
import CoursesList from "./CoursesList";

const HookLayout = () => {
  return (
    <Container fluid="md">
      <Row>
        <AddCoursePage />
      </Row>

      <Row>
        <Col>
          <CoursesList name="Left" />
        </Col>
        <Col>
          <CoursesList name="Right" />
        </Col>
      </Row>
    </Container>
  );
};

export default HookLayout;
