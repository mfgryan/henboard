import React, { Component } from "react";
import AddItem from "../addItem/AddItem";
import "./Swimlane.css";
import Item from "../item/Item";

class Swimlane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "", 
            items: this.props.items,
            laneStyle: {outline: "none"}
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.drop = this.drop.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.setDragLane = this.setDragLane.bind(this);
    }
    addItem(value,info){
        if(value){
            if(this.state.items.some(item => value === item.val)){
                alert("item already exists!"); 
            }else{
                this.setState((prevState) => {
                    return { items: prevState.items.concat( [{val: value, info: info}] ) }; 
                });
                return true;
            }
        }
        return false;
    }
    removeItem(value){
        this.setState((prevState) => {
            return { items: prevState.items.filter(item => value !== item.val) };  
        });
    }
    onValueChange(e){
        this.setState({value: e.target.value});
    }
    drop(e){
        const item = JSON.parse(e.dataTransfer.getData("item"));
        this.setState({laneStyle: {outline: "none"}});
        this.addItem(item.val, item.info) && this.props.dragLane.removeItem(item.val);
    }
    dragOver(e){
        this.setState({laneStyle: {outline: "2px dashed #AAA"}});
        e.preventDefault();
    }
    dragLeave(e){
        this.setState({laneStyle: {outline: "none"}});
        e.preventDefault(); 
    }
    setDragLane(){
        this.props.setDragLane(this);
    }
    render(){
        const items = this.state.items.map((item) => <Item info={item.info} val={item.val} removeItem={this.removeItem} setDragLane={this.setDragLane} key={item.val} />);
        return (
            <div className="swimlane"> 
                <AddItem value={this.state.value} onValueChange={this.onValueChange} addItem={this.addItem} name={this.props.name}/> 
                <div className="itemsArea" onDrop={this.drop} onDragOver={this.dragOver} onDragLeave={this.dragLeave} style={this.state.laneStyle}>
                    {items}
                </div>
            </div>
        ); 
    }
}
export default Swimlane;
