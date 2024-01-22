import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="text-muted">
              &copy; 2021 - {new Date().getFullYear()} The MITRE Corporation
            </p>
          </Col>
          <Col>
            <a href="/privacy" target="_blank">
              Privacy Policy
            </a>
            <br />
            <a href="/terms" target="_blank">
              Terms of Use
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
