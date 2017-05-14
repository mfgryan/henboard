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
        return (
            <div className="addItem inline">
                <div className="laneheader">
                    <h2 className="inline">{this.props.name}</h2>
                    <span className="toggleAdd" onClick={}>+</span>
                    {this.state.showAdd && 
                        <div> 
                            <input type="text" value={} onChange={} />
                            <button onClick={}>add</button>
                        </div>
                    } 
                </div>
            </div>
        ); 
    }
}
export default AddItem;
