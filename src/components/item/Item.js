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
    getInfo(){
        return this.props.info ? <span className="alignleft blue info" onClick={this.openInfo}> i </span> : null;
    }
    getRemove(){
        return this.props.hideRemove ? null : <span className="alignright red">X</span>;
    }
    openInfo(){
        this.setState({isOpen: true}); 
    }
    closeInfo(){
        this.setState({isOpen: false}); 
    }
    getDialogComponent(){
        if(this.props.info){
            const body = <InfoList name={this.props.val} items={this.props.info}/>;
            const footer = <Button onClick={this.closeInfo}>Close</Button>;
            return  <Dialog body={body} footer={footer} isOpen={this.state.isOpen}/>
        }else{
            return null; 
        }
    }
    render(){
        return (
            <p>
                {this.getInfo()}
                <span className="aligncenter itemval">{this.props.val}</span>
                {this.getRemove()}
                {this.getDialogComponent()}
            </p> 
        ); 
    }
}
export default Item;
