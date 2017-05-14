import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Dialog.css";

class Dialog extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <Modal show={this.props.isOpen}>   
                {this.props.title && 
                <Modal.Header >
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>}
                <Modal.Body>
                    {this.props.body} 
                </Modal.Body>
                <Modal.Footer>
                    {this.props.footer}
                </Modal.Footer>
            </Modal>
        ); 
    }
}
export default Dialog;
