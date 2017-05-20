//react dep
import React from "react";

//bootstrap dep
import { Col, Row } from "react-bootstrap";

//component dep
import GetSwimlane from "../swimlane/GetSwimlane";
import Selector from "../selector/Selector";

//style dep
import "./Board.css";

const Board = ( { lanes, sprints, setSprint } ) => {
    const getColWidth = (laneCount, index) => (
        (12 / laneCount) + (index < (12 % laneCount) ? 1 : 0 )
    );
    return (
        <div>
            <Row className="board">
                {lanes.map((lane, index) => 
                    <Col md={getColWidth(lanes.length,index)} key={index}>
                        <GetSwimlane project={lane.project} column={lane.column} />
                    </Col>
                )}
            </Row>
            <Row>
                <Col md={12}>
                    <Selector sprints={sprints} setSprint={setSprint} />
                </Col>
            </Row>
        </div>
    )
}

export default Board; 
