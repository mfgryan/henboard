import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        const toggleAdd = <div> 
                            <input type="text" value={this.props.value} onChange={this.props.onValueChange} />
                            <button onClick={this.props.addItem}>add</button>
                          </div>
        return (
            <div className="addItem inline">
                <div className="laneheader">
                    <h2 className="inline">{this.props.name}</h2>
                    <span className="toggleAdd" onClick={this.props.toggleAddItem}>+</span>
                    { this.props.showAdd ? toggleAdd : null} 
                </div>
            </div>
        ); 
    }
}
export default AddItem;
