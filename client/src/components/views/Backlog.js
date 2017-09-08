// react dep
import React from "react";
import { connect } from "react-redux";
import projects from "../../models/projects.js";
import lanes from "../../models/lanes.js";

// component dep
import Swimlane from "../containers/Swimlane";

// style dep
import { Col, Row } from "react-bootstrap";
import "../../css/Backlog.css";

export const Backlog = ({ project, lanes }) => {
    return (
        <Row className="board">
            {lanes.map((lane, index) =>
                <Col md={4} key={index}>
                    <Swimlane
                        project={project.project}
                        column={lane.column}
                    />
                </Col>
            )}
        </Row>
    );
};

const mapStateToProps = state => {
    let project = projects.getCurrentProject(state);
    let backlog = lanes.getBacklog(state, project.project);
    return {
        project: project,
        lanes: backlog
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Backlog);
