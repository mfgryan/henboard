import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            showAdd: false 
        }
        this.toggleAdd = this.toggleAdd.bind(this);
    }
    toggleAdd(){
        this.setState((prevState, props) => ({ 
            showAdd: !prevState.showAdd
        }));
    }
    render(){
        const add = <div><input /><button className="add" onClick={this.toggleAdd}>add</button></div>
        return (
            <div className="addItem inline">
                <div className="laneheader">
                    <h2 className="inline">{this.props.name}</h2>
                    <span className="toggleAdd" onClick={this.toggleAdd}>+</span>
                    { this.state.showAdd ? add : null}
                </div>
            </div>
        ); 
    }
}
export default AddItem;
