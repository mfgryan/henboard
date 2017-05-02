import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            showAdd: false
        }
        this.toggleAddItem = this.toggleAddItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    toggleAddItem(){
        this.setState((prevState, props) => {
            return {showAdd: !prevState.showAdd};
        });
    }
    addItem(){
        this.toggleAddItem();
        this.props.addItem(this.props.value,[]);
    }
    render(){
        const toggleAdd = <div> 
                            <input type="text" value={this.props.value} onChange={this.props.onValueChange} />
                            <button onClick={this.addItem}>add</button>
                          </div>
        return (
            <div className="addItem inline">
                <div className="laneheader">
                    <h2 className="inline">{this.props.name}</h2>
                    <span className="toggleAdd" onClick={this.toggleAddItem}>+</span>
                    { this.state.showAdd ? toggleAdd : null} 
                </div>
            </div>
        ); 
    }
}
export default AddItem;
