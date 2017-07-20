// react dep
import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Jumbotron } from "react-bootstrap";
import { setPlanning, togglePlanning, changePlanningValue } from "../../actions/planning.js"; 
import projects from "../../models/projects.js";
import planning from "../../models/planning.js";

// component dep
import App from "../App";

// style dep
import "../../css/Planning.css";

export const Planning = ({ project, item, addStatement, changeValue, toggleAddStatement }) => {
    return (
        <App>
            <Jumbotron className="PlanningTron">
                <Row>
                    <Col md={8} mdOffset={2}>
                        <h2 onClick={() => toggleAddStatement(item)} >Mission Statement</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} mdOffset={2}>
                        {item.editing ? 
                            <textarea className="PlanningTextArea" value={item.value} onChange={(event) => changeValue(event,item)}/> : 
                            <h4>{item.missionStatement}</h4>
                        }
                    </Col>
                </Row>
                {item.editing && <Row>
                    <Col md={8} mdOffset={2} className="PlanningButton" >
                        <Button onClick={() => addStatement(item)}>Save</Button>
                    </Col>
                </Row>}
            </Jumbotron>
        </App>
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let plan = planning.getPlan(state, project.project);
    return {
        project: project.project,
        item: {
            project: project.project,
            missionStatement: plan.missionStatement,
            editing: plan.editing,
            value: plan.value
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAddStatement: (item) => {
            dispatch(togglePlanning({
                project: item.project 
            })) 
        },
        changeValue: (event, item) => {
            dispatch(changePlanningValue({
                project: item.project,
                value: event.target.value,
            }))
        },
        addStatement: (item) => {
            dispatch(setPlanning({
                project: item.project, 
                missionStatement: item.value
            }))
            dispatch(togglePlanning({
                project: item.project
            }))
        }  
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Planning);
