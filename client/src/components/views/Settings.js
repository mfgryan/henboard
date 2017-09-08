// react dep
import React from "react";
import { connect } from "react-redux";
import { Row, Col, Panel } from "react-bootstrap";
import projects from "../../models/projects.js";
import sprints from "../../models/sprints.js";

// style dep
import "../../css/Settings.css";

export const Planning = ({ project, week }) => {
    return (
        <Row>
            <Col md={4} mdOffset={2}>
                <Panel header="project">
                    {project}
                </Panel>
            </Col>
            <Col md={4}>
                <Panel header="current Sprint">
                    {week}
                </Panel>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state, project.project);
    return {
        project: project.project,
        week: sprint.week
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
