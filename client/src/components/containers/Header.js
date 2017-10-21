// react and redux
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeMessages } from "../../actions/messages.js";
import { logout } from "../../actions/user.js";
import projects from "../../models/projects.js";
import user from "../../models/user.js";
import Login from "./Login";
import SelectorBoard from "../containers/SelectorBoard";

// style dep
import { Row, Col, Alert, DropdownButton, MenuItem } from "react-bootstrap";
import "../../css/Header.css";

class Header extends Component { 
    constructor(props){
        super(props); 
        this.state = {
            openLogin: false 
        };
    }

    getLink(link, text, index){
        return link === "div" ? <MenuItem key={index} divider/> : <li key={index} ><Link to={link}>{text}</Link></li>
    }

    accountButton(user){
        return user ? <MenuItem key="logout" eventKey="logout">
                          Log Out <b><small>({user})</small></b>
                      </MenuItem> : 
                      <li><a onClick={() => this.setState({openLogin: true})} >Sign In</a></li>
    }

    render() {
        this.props.messages.length > 0 && setTimeout(this.props.removeMessages, 5000);
        let views = ["div", "home", "backlog", "planning", "div"];
        let texts = views;
        let settings = ["div", "settings"]; 
        let setTexts = settings;
        let home = (window.location.pathname === "/" || window.location.pathname === "/home");
        return (
            <Row className="Header">
                <Col md={4}>
                    {this.props.messages.length > 0 &&
                    <Alert className="HeaderErrorMessage" bsStyle="danger">
                        <strong>Error. </strong> {this.props.messages[0]}
                    </Alert>}
                </Col>
                <Col md={4} mdOffset={8} className="HeaderDropdownCol">
                    {home && <SelectorBoard project={this.props.title} />}
                    <DropdownButton
                        noCaret
                        className="HeaderDropdownMenu"
                        title="≡"
                        id="HeaderMenu"
                        onSelect={event => this.props.itemClicked(event)}>
                        { this.accountButton(this.props.user) }
                        { views.map((view, index) => this.getLink(view, texts[index], index)) }
                        <MenuItem key="undo" eventKey="undo">
                            undo <small>Ctrl-left</small>
                        </MenuItem>
                        <MenuItem key="redo" eventKey="redo">
                            redo <small>Ctrl-right</small>
                        </MenuItem>
                        { settings.map((setting,index) => this.getLink(setting, setTexts[index], index)) }
                    </DropdownButton>
                        {this.state.openLogin &&
                            <Login close={() => this.setState({openLogin: false}) }/>}
                </Col>
            </Row>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    return {
        title: project.project,
        messages: state.messages,
        user: user.name(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeMessages: () => {
            dispatch(removeMessages());
        },
        itemClicked: key => {
            switch(key){
                case "undo": 
                    ownProps.history.undo();
                    break;
                case "redo":
                    ownProps.history.redo();
                    break;
                case "logout":
                    dispatch(logout()); 
                    break;
                default:
                    break;
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
