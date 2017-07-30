// react dep
import React, { Component } from "react";
import { connect } from "react-redux";
import projects from "../../models/projects.js";
import lanes from "../../models/lanes.js";

// component dep
import App from "../App";
import Swimlane from "../containers/Swimlane";
import SelectorBoard from "../containers/SelectorBoard";

// style dep
import { Col, Row } from "react-bootstrap";
import "../../css/Home.css";

export const Home = ({ project, lanes }) => {
    const getColWidth = (laneCount, index) =>
        12 / laneCount + (index < 12 % laneCount ? 1 : 0);
    return (
        <App>
            <div>
                <Row className="board">
                    {lanes.map((lane, index) =>
                        <Col md={getColWidth(lanes.length, index)} key={index}>
                            <Swimlane
                                project={project.project}
                                column={lane.column}
                            />
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col md={12}>
                        <SelectorBoard project={project.project} />
                    </Col>
                </Row>
            </div>
        </App>
    );
};

const mapStateToProps = state => {
    let project = projects.getCurrentProject(state);
    return {
        project: project,
        lanes: lanes.getLanes(state, project.project)
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
