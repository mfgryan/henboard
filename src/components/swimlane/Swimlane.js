import React, { Component } from "react";
import AddItem from "../addItem/AddItem";
import "./Swimlane.css";
import Item from "../item/Item";

class Swimlane extends React.Component {
    render(){
        const items = this.props.items.map((curItem,index) => 
            <Item val={curItem.val} info={curItem.info} key={index}/>
        );
        return (
            <div className="swimlane">
                <AddItem name={this.props.name}/> 
                {items}
            </div>
        ); 
    }
}
export default Swimlane;
