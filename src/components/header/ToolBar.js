import React, { Component } from "react";
import "./ToolBar.css";

class ToolBar extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            showMenu: false, 
            selectedOption: ""
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.showOption = this.showOption.bind(this);
    }
    toggleMenu(){
        this.setState((prevState, props) => ({
            showMenu: !prevState.showMenu 
        })); 
    }
    showOption(e){
        this.setState({selectedOption: e.target.innerHTML});
        this.toggleMenu();     
    }
    render(){
        const menu = <ul>
            {this.props.options.map((curOption,index) => 
                <li onClick={this.showOption} key={index}>{curOption}</li>
            )}
            </ul>
        return (
            <div className="toolbar">         
                <h1 className="toolbaricon" onClick={this.toggleMenu}>≡</h1>
                { this.state.showMenu ? menu : null }
            </div>
        ); 
    }
}
export default ToolBar;
