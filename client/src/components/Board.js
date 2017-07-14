// react dep
import React from "react";
import { Col, Row } from "react-bootstrap";

// component dep
import SwimlaneBoard from "./containers/SwimlaneBoard";
import SelectorBoard from "./containers/SelectorBoard";

// style dep
import "../css/Board.css";

const Board = ( { lanes } ) => {
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

export default Board; 
