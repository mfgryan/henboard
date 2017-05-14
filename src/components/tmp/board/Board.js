import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Board.css"
import Swimlane from "../swimlane/Swimlane";

class Board extends React.Component {
        constructor(props){
            super(props); 
            this.getColWidth = this.getColWidth.bind(this);
        }
        getColWidth(laneCount,index){
            return (12 / laneCount) + (index < (12 % laneCount) ? 1 : 0 );
        }
        render(){
            return (
                <Row className="board" >
                    {this.props.lanes.map((curLane,index) => 
                        <Col md={this.getColWidth(this.props.lanes.length,index)} key={index}>
                            <Swimlane />
                        </Col>
                    )}
                </Row>
            ); 
        }
}
export default Board;
