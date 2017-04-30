import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Item.css";
import Dialog from "../dialog/Dialog";
import InfoList from "../infoList/InfoList";

class Item extends React.Component {
    constructor(props){
        super(props);     
        this.closeInfo = this.closeInfo.bind(this);
        this.openInfo = this.openInfo.bind(this);
        this.state = {
            isOpen: false 
        }
    }
    openInfo(){
        this.setState({isOpen: true}); 
    }
    closeInfo(){
        this.setState({isOpen: false}); 
    }
    render(){
        const body = <InfoList name={this.props.val} items={this.props.info}/>;
        const footer = <Button onClick={this.closeInfo}>Close</Button>;
        return (
            <p>
                {this.props.info &&  <span className="alignleft blue info" onClick={this.openInfo}> i </span>}
                <span className="aligncenter itemval">{this.props.val}</span>
                {!this.props.hideRemove &&  <span className="alignright red" id={this.props.val} onClick={() => this.props.removeItem(this.props.val)}>X</span>}
                {this.props.info && <Dialog body={body} footer={footer} isOpen={this.state.isOpen}/>}
            </p> 
        ); 
    }
}
export default Item;
