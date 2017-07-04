// react dep
import React from "react";

// bootstrap dep
import { Row, Col, Alert } from "react-bootstrap";

//css dep
import "../css/Header.css";

const Header = ( { project, messages, removeMessages } ) => {
    messages.length > 0 && setTimeout(removeMessages, 5000);
    return (
        <Row>
            <Col md={2}>
                <h1>≡</h1>
            </Col>
            <Col md={8}>
                <h1>{ project }</h1>
            </Col>
            <Col md={2}>
                { messages.length > 0 &&
                <Alert className="errorMessage" bsStyle="danger">
                    <strong>Error. </strong> { messages[0] }
                </Alert>
                }
            </Col>
        </Row>
    )
};

export default Header;
