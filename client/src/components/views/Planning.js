// react dep
import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import projects from "../../models/projects.js";
import sprints from "../../models/sprints.js";

// component dep
import App from "../App";

// style dep
import "../../css/Planning.css";

export const Planning = ({ project, week }) => {
    return (
        <App>
            <Row>
                <Col md={8} mdOffset={2}>
                    <h2>Mission Statement</h2>
                    <textarea/>
                </Col>
            </Row>
        </App>
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state, project.project);
    return {
        project: project.project,
        week: sprint.week
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Planning);
