import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Board.css";
import GetSwimlane from "../../containers/getSwimlane/GetSwimlane";

const Board = ( { lanes } ) => {
    const getColWidth = (laneCount, index) => (
        (12 / laneCount) + (index < (12 % laneCount) ? 1 : 0 )
    );

    return (
        <Row className="board">
            {lanes.map((lane, index) => 
                <Col md={getColWidth(lanes.length,index)} key={index}>
                    <GetSwimlane project={lane.project} column={lane.column} />
                </Col>
            )}
        </Row>
    )
}

export default Board; 
