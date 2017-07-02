// redux dep
import { connect } from "react-redux";

// component dep
import Swimlane from "../components/Swimlane";

// action dep
import { moveItem } from "../actions/items";

const mapStateToProps = (state, ownProps) => {
    const currentProject = state.projects.find( project => project.current === true );
    const currentSprint = state.sprints.find( sprint => sprint.current === true );
    return {
        project: currentProject.project, 
        column: ownProps.column,
        week: currentSprint.week,
        items: state.items.filter((item) =>
            item.project === currentProject.project &&
            item.week === currentSprint.week &&
            item.column === ownProps.column
        )
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        allowDrop: (event) => {
            event.preventDefault();
        },
        dropItem: (event,project,column,week) => { 
            event.preventDefault();
            const name = event.dataTransfer.getData("text");
            dispatch(moveItem({project: project, name: name, week: week, column: column}))
        } 
    }
};

const GetSwimlane = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Swimlane);

export default GetSwimlane;
