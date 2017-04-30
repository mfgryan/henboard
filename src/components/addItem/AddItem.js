import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            showAdd: false
        }
        this.toggleAddItem = this.toggleAddItem.bind(this);
    }
    toggleAddItem(){
        this.setState((prevState, props) => {
            return {showAdd: !prevState.showAdd};
        });
    }
    render(){
        const add = <div>
                        <input type="text" value={this.props.value} onChange={this.props.onValueChange} />
                        <button className="add" onClick={this.props.addItem}>add</button>
                    </div>
        return (
            <div className="addItem inline">
                <div className="laneheader">
                    <h2 className="inline">{this.props.name}</h2>
                    <span className="toggleAdd" onClick={this.toggleAddItem}>+</span>
                    { this.state.showAdd ? add : null}
                </div>
            </div>
        ); 
    }
}
export default AddItem;
