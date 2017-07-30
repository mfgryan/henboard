// redux dep
import { connect } from "react-redux";
import { addItem } from "../../actions/items";
import { toggleAddItem, changeValue } from "../../actions/lanes";
import projects from "../../models/projects.js";
import sprints from "../../models/sprints.js";
import lanes from "../../models/lanes.js";

// component dep
import AddItem from "../AddItem";

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state);
    let lane = lanes.getLane(state, project.project, ownProps.column);
    return {
        title: ownProps.column,
        value: lane.value,
        showAddItem: lane.addItem,
        item: {
            project: project.project,
            column: ownProps.column,
            week: sprint.week,
            name: lane.value
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAddItem: title => {
            dispatch(
                toggleAddItem({
                    project: ownProps.project,
                    column: title
                })
            );
        },
        changeValue: (event, title) => {
            dispatch(
                changeValue({
                    project: ownProps.project,
                    column: title,
                    value: event.target.value
                })
            );
        },
        addItem: item => {
            dispatch(
                addItem({
                    project: item.project,
                    week: item.week,
                    column: item.column,
                    name: item.name
                })
            );
            //after adding an item clear the input field
            dispatch(
                changeValue({
                    project: item.project,
                    column: item.column,
                    value: ""
                })
            );
        }
    };
};

const AddItemLane = connect(mapStateToProps, mapDispatchToProps)(AddItem);

export default AddItemLane;
