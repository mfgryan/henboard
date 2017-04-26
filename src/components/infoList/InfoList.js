import React, { Component } from "react";
import AddItem from "../addItem/AddItem";
import "./InfoList.css";
import Item from "../item/Item";

class InfoList extends React.Component {
    render(){
        const items = this.props.items.map((curItem,index) =>
            <Item val={curItem} key={index}/>
        );
        return (
            <div className="infoList">
                <AddItem name={this.props.name}/> 
                {items}
            </div>
        ); 
    }
}
export default InfoList;
