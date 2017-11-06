// react dep
import React from "react";
import { connect } from "react-redux";
import { Row, Col, Panel } from "react-bootstrap";
import projects from "../../models/projects.js";
import sprints from "../../models/sprints.js";
import user from "../../models/user.js";

// style dep
import "../../css/Settings.css";

export const Planning = ({ project, week, user }) => {
    return (
        <div>
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
            <Row>
                <Col md={4} mdOffset={2}>
                    <Panel header="User">
                        {user.name}
                    </Panel>
                </Col>
                <Col md={4}>
                    <Panel header="Email">
                        {user.email}
                    </Panel>
                </Col>
            </Row>
            <Row>
                <Col md={8} mdOffset={2}>
                    <Panel header="Terms">
                        <b>Sprint</b>
                        <p>Timeboxed effort for completing a set of tasks which typically runs for 1-2 weeks.</p>
                        <b>Backlog</b>
                        <p>Used for creating items which have not been assigned to a given sprint.</p>
                    </Panel>
                </Col>
            </Row>
        </div>    
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state, project.project);
    let id = user.getUser(state);
    return {
        project: project.project,
        week: sprint.week,
        user: id
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
