import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Board.css"
import Swimlane from "../swimlane/Swimlane";

class Board extends React.Component {
        constructor(props){
            super(props); 
        }
        getColWidth(laneCount,index){
            return (12 / laneCount) + (index < (12 % laneCount) ? 1 : 0 );
        }
        render(){
            const laneCount = this.props.lanes.length;
            const lanes = this.props.lanes.map((curLane,index) => 
                <Col md={this.getColWidth(laneCount,index)} key={index}>
                        <Swimlane name={curLane.name} items={curLane.items} key={index}/>
                </Col>
            );
            return (
                <Row className="board" >{lanes}</Row>
            ); 
        }
}
export default Board;
