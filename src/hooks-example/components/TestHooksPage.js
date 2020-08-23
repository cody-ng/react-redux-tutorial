import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HookCoursesPage from "./HookCoursesPage";

const TestHooksPage = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <HookCoursesPage />
        </Col>
        <Col>
          <HookCoursesPage />
        </Col>
      </Row>
    </Container>
  );
};

export default TestHooksPage;
