import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";
import ToolBar from "./ToolBar";

class Header extends React.Component {
    render(){
        return (
            <Row className="header">
                <Col md={2}><ToolBar options={this.props.options}/></Col>
                <Col md={8}><h1>{this.props.name}</h1></Col>
            </Row>
        ); 
    }
}
export default Header
