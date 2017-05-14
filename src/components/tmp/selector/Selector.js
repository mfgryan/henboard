import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Selector extends React.Component {
    render(){
        const sprintWeeks = this.props.sprint.map((curSprint,index) => 
            <option value={curSprint.week} key={index}>{curSprint.week}</option>    
        );
        const week = this.props.sprint[0].week;
        return (
            <Row>
                <Col md={12}>
                    <h2>Week - {week}</h2>
                    <select>{sprintWeeks}</select>
                </Col>
            </Row>
        ); 
    }
}
export default Selector;
