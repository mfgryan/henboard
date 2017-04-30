import React, { Component } from "react";
import AddItem from "../addItem/AddItem";
import "./Swimlane.css";
import Item from "../item/Item";

class Swimlane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "", 
            items: this.props.items       
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    addItem(){
        if(this.state.value){
            if(this.state.items.some(item => this.state.value === item.val)){
                alert("item already exists!"); 
            }else{
                this.setState((prevState) => {
                    return { items: prevState.items.concat( [{val: prevState.value, info: []}] ) }; 
                });
            }
        }
    }
    removeItem(val){
        this.setState((prevState) => {
            return { items: prevState.items.filter(item => val !== item.val) };  
        });
    }
    onValueChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        const items = this.state.items.map((item) => <Item info={item.info} val={item.val} removeItem={this.removeItem} key={item.val} />);
        return (
            <div className="swimlane">
                <AddItem value={this.state.value} onValueChange={this.onValueChange} addItem={this.addItem} name={this.props.name}/> 
                {items}
            </div>
        ); 
    }
}
export default Swimlane;
