// react dep
import React from "react";

// bootstrap dep
import { Row, Col, Alert, DropdownButton, MenuItem } from "react-bootstrap";

//css dep
import "../css/Header.css";

const Header = ( { project, messages, removeMessages } ) => {
    messages.length > 0 && setTimeout(removeMessages, 5000);
    return (
        <Row>
            <Col md={2}>
                { messages.length > 0 &&
                <Alert className="errorMessage" bsStyle="danger">
                    <strong>Error. </strong> { messages[0] }
                </Alert>
                }
            </Col>
            <Col md={8}>
                <h1>{ project }</h1>
            </Col>
            <Col md={2}>
                <DropdownButton className="dropDownMenu" noCaret title="≡" >
                    <MenuItem key="home" eventKey="home">home</MenuItem>
                    <MenuItem key="backlog" eventKey="backlog">backlog</MenuItem>
                    <MenuItem key="planning" eventKey="planning">planning</MenuItem>
                    <MenuItem divider />
                    <MenuItem key="undo" eventKey="undo">undo <small>(← key)</small></MenuItem>
                    <MenuItem key="redo" eventKey="redo">redo <small>(→ key)</small></MenuItem>
                    <MenuItem divider />
                    <MenuItem key="settings" eventKey="settings">settings</MenuItem>
                </DropdownButton>
            </Col>
        </Row>
    )
};

export default Header;
