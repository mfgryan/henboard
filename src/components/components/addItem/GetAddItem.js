// redux dep
import { connect } from "react-redux";

// component dep
import AddItem from "./AddItem";

// action dep
import { addItem } from "../../../actions/items";
import { toggleAddItem, changeValue } from "../../../actions/lanes";

const mapStateToProps = (state, ownProps) => {
    const currentProject = state.projects.find( project => project.current === true );
    const currentSprint = state.sprints.find( sprint => sprint.current === true );
    const currentValue = state.lanes.find((lane) =>
            lane.project === currentProject.project && 
            lane.column === ownProps.column
    ).value
    return {
        item: {
            project: currentProject.project,
            column: ownProps.column,
            week: currentSprint.week,
            name: currentValue
        },
        lane: {
            project: currentProject.project,        
            column: ownProps.column,
            addItem: state.lanes.find((lane) =>
                lane.project === currentProject.project && 
                lane.column === ownProps.column
            ).addItem,
            value: currentValue
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddItem: (lane) => {
            dispatch(toggleAddItem({
                project: lane.project, 
                column: lane.column
            })); 
        }, 
        changeValue: (event,lane) => {
            dispatch(changeValue({
                project: lane.project, 
                column: lane.column,
                value: event.target.value
            }));
        },
        addItem: (item) => {
            dispatch(addItem({
                project: item.project, 
                week: item.week, 
                column: item.column, 
                name: item.name
            }))
        }
    }
}

const GetAddItem = connect(  
    mapStateToProps,
    mapDispatchToProps
)(AddItem)

export default GetAddItem;
