// react dep
import React from "react";
import { Link } from "react-router-dom";

// bootstrap dep
import { Row, Col, Alert, DropdownButton, MenuItem } from "react-bootstrap";

//css dep
import "../css/Header.css";

const Header = ( { project, messages, removeMessages } ) => {
    messages.length > 0 && setTimeout(removeMessages, 5000);
    return (
        <Row className="Header">
            <Col md={4}>
                { messages.length > 0 &&
                <Alert className="HeaderErrorMessage" bsStyle="danger">
                    <strong>Error. </strong> { messages[0] }
                </Alert>
                }
            </Col>
            <Col md={4}>
                <h1>{ project }</h1>
            </Col>
            <Col md={4} className="HeaderDropdownCol">
                <DropdownButton className="HeaderDropdownMenu" noCaret title="≡" id="HeaderMenu">
                    <MenuItem key="home" eventKey="home"><Link to="/home">home</Link></MenuItem>
                    <MenuItem key="backlog" eventKey="backlog"><Link to="/backlog">backlog</Link></MenuItem>
                    <MenuItem key="planning" eventKey="planning"><Link to="/planning">planning</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem key="undo" eventKey="undo">undo <small>(← key)</small></MenuItem>
                    <MenuItem key="redo" eventKey="redo">redo <small>(→ key)</small></MenuItem>
                    <MenuItem divider />
                    <MenuItem key="settings" eventKey="settings"><Link to="/settings">settings</Link></MenuItem>
                </DropdownButton>
            </Col>
        </Row>
    )
};

export default Header;
