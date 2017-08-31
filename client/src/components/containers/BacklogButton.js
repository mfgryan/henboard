    // redux dep
import React from "react";
import { connect } from "react-redux";
import { Button, Col } from "react-bootstrap";
import { moveItem } from "../../actions/items.js";
import projects from "../../models/projects";
import sprints from "../../models/sprints";

import "../../css/BacklogButton.css";

export const BacklogButton = ({ title, item, buttonClicked }) => {
    return (
        <Col md={4} mdOffset={7} className="BacklogButton">
            <Button onClick={event => buttonClicked(event, item)}>
                {title}
            </Button>
        </Col>
    );
};

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state, project.project);
    let newItem = Object.assign({}, ownProps.item, {
        week: sprint.week,
        column: "Todo"
    });
    return {
        title: "Send To " + sprint.week,
        item: newItem
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonClicked: (event, item) => {
            dispatch(moveItem(item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BacklogButton);
