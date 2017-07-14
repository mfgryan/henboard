// react dep
import React from "react";
import { connect } from "react-redux";
import projects from "../../models/projects.js";
import lanes from "../../models/lanes.js";

// component dep
import SwimlaneBoard from "./SwimlaneBoard";
import SelectorBoard from "./SelectorBoard";

// style dep
import { Col, Row } from "react-bootstrap";
import "../../css/Board.css";

export const Board = ( { lanes } ) => {
    const getColWidth = (laneCount, index) => (
        (12 / laneCount) + (index < (12 % laneCount) ? 1 : 0 )
    );
    return (
        <div>
            <Row className="board">
                {lanes.map((lane, index) => 
                    <Col md={getColWidth(lanes.length,index)} key={index}>
                        <SwimlaneBoard project={lane.project} column={lane.column} />
                    </Col>
                )}
            </Row>
            <Row>
                <Col md={12}>
                    <SelectorBoard />
                </Col>
            </Row>
        </div>
    )
};

const mapStateToProps = (state) => {
    let project = projects.getCurrentProject(state);
    return {
        lanes: lanes.getLanes(state, project.project)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};



export default connect(mapStateToProps,mapDispatchToProps)(Board);
