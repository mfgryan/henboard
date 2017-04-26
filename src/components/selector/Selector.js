import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Selector extends React.Component {
    render(){
        const options = this.props.options.map((curOption,index) => 
            <option value={curOption.val} key={index}>{curOption.name}</option>    
        );
        const week = this.props.options[0].val;
        return (
            <Row>
                <Col md={12}>
                    <h2>Week - {week}</h2>
                    <select>{options}</select>
                </Col>
            </Row>
        ); 
    }
}
export default Selector;
