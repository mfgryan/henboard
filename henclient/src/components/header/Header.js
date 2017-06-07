// react dep
import React from "react";

// bootstrap dep
import { Row, Col } from "react-bootstrap";

const Header = ( { project } ) => (
    <Row>
        <Col md={2}>
            <h1>≡</h1>
        </Col>
        <Col md={8}>
            <h1>{ project }</h1>
        </Col>
    </Row>
);

export default Header;
