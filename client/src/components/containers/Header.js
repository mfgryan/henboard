// react and redux
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeMessages } from "../../actions/messages.js";
import projects from "../../models/projects.js";
import history from "../../util/history.js";

// style dep
import { Row, Col, Alert, DropdownButton, MenuItem } from "react-bootstrap";
import "../../css/Header.css";

export const Header = ({ title, messages, removeMessages, itemClicked }) => {
    messages.length > 0 && setTimeout(removeMessages, 5000);
    return (
        <Row className="Header">
            <Col md={4}>
                {messages.length > 0 &&
                    <Alert className="HeaderErrorMessage" bsStyle="danger">
                        <strong>Error. </strong> {messages[0]}
                    </Alert>}
            </Col>
            <Col md={4} mdOffset={8} className="HeaderDropdownCol">
                <DropdownButton
                    noCaret
                    className="HeaderDropdownMenu"
                    title="≡"
                    id="HeaderMenu"
                    onSelect={event => itemClicked(event)}>
                    <li>
                        <Link to="/home">home</Link>
                    </li>
                    <li>
                        <Link to="/backlog">backlog</Link>
                    </li>
                    <li>
                        <Link to="/planning">planning</Link>
                    </li>
                    <MenuItem divider />
                    <MenuItem key="undo" eventKey="undo">
                        undo <small>Ctrl-left</small>
                    </MenuItem>
                    <MenuItem key="redo" eventKey="redo">
                        redo <small>Ctrl-right</small>
                    </MenuItem>
                    <MenuItem divider />
                    <li>
                        <Link to="/settings">settings</Link>
                    </li>
                </DropdownButton>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    return {
        title: project.project,
        messages: state.messages
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeMessages: () => {
            dispatch(removeMessages());
        },
        itemClicked: key => {
            if (key === "undo") {
                history.undo();
            } else if (key === "redo") {
                history.redo();
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
