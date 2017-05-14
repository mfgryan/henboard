import React, { Component } from "react";
import AddItem from "../addItem/AddItem";
import "./Swimlane.css";
import Item from "../item/Item";

class Swimlane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "" 
        }    
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return (
            <div className="swimlane"> 
                <AddItem /> 
                <div className="itemsArea" onDrop={} onDragOver={} onDragLeave={} style={}>
                    {this.state.items.map((item) => 
                        <Item />
                    )}
                </div>
            </div>
        ); 
    }
}
export default Swimlane;
