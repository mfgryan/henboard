//redux dep
import { connect } from "react-redux";

//component dep
import Board from "./Board";

//action dep
import { setCurrentSprint } from "../../../actions/sprints";

const mapStateToProps = (state) => {
    const currentProject = state.projects.find(project => project.current === true);
    return {
        lanes: state.lanes.filter((lane) =>
            lane.project === currentProject.project
        ),
        sprints: state.sprints.filter((sprint) =>
            sprint.project === currentProject.project
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSprint: ( event ) => {
            dispatch(setCurrentSprint({project: ownProps.project, week: event.target.value}))
        }
    }
}

const GetBoard = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default GetBoard;
